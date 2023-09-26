
import { createStore, StoreOptions } from 'vuex'
import * as db from '../../testDataBase.json';
import { useToast } from 'vue-toast-notification';
import database from '@/database/database';
import 'vue-toast-notification/dist/theme-sugar.css';
// Create a new store instance.
interface RootState {
    cart: {
        count: number,
        productList: object[]
    };
}
export
    const store: StoreOptions<RootState> = createStore({
        state() {
            return {
                cart: {
                    count: 0,
                    productList: []
                }
            }
        },
        mutations: {
            setCartFromLocalStorage(state, cart) {
                state.cart = cart;
            },
            addToCart(state, product) {
                state.cart.count++;
                state.cart.productList.push(product);
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            updateCart(state, data) {
                state.cart.count = data.count;
                state.cart.productList[data.index].countInCart = data.countInCart;
                state.cart.productList[data.index].checkOutSumary = data.checkOutSumary;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            removeProduct(state, id) {
                const index = state.cart.productList.findIndex((product) => product.product_id === id);
                state.cart.count -= state.cart.productList[index].countInCart;
                state.cart.productList.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
            , changeAmountProducts(state, infor) {
                const index = state.cart.productList.findIndex((product) => product.product_id === infor.id);
                state.cart.productList[index].checkOutSumary = infor.increase * state.cart.productList[index].price + parseInt(state.cart.productList[index].checkOutSumary);
                state.cart.productList[index].countInCart += infor.increase;
                state.cart.count += infor.increase;
                if (state.cart.productList[index].countInCart == 0 && infor.increase < 0) {
                    state.cart.productList.splice(index, 1);
                }
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },
        actions: {
            initializeCartFromLocalStorage(context) {
                // Kiểm tra xem dữ liệu giỏ hàng đã được lưu trong Local Storage hay chưa
                const cartData = localStorage.getItem('cart');
                if (cartData) {
                    const cart = JSON.parse(cartData);
                    context.commit('setCartFromLocalStorage', cart);
                }
            },
            async addToCartAction(context, data) {
                const $toast = useToast();
                let message = '', status = false;
                // kiểm tra database xem sản phẩm có tồn tại? còn hay hết?
                const result = await database.getDetailProduct(data.id);
                const product = result.currentProduct;
                if (product && product.quanity > 0) {
                    // nếu tồn tại và còn thì kiểm tra xem trong giỏ hàng có chưa?
                    let check = !context.state.cart.productList.find((product) => { return product.product_id === data.id }) ? false : context.state.cart.productList.find((product) => { return product.product_id === data.id });
                    console.log(check);
                    console.log(check);
                    if (!check) {
                        // nếu chưa có -> thêm sản phẩm vào mảng bằng toán tử spread
                        let newProduct = { ...product, countInCart: 1, checkOutSumary: product.price };
                        context.commit('addToCart', newProduct);
                        status = true;
                        message = 'Thêm vào giỏ hàng thành công';
                    } else {
                        // nếu đã có -> tăng countInCart và cập nhật sumary ( không được thêm quá số sẵn có)
                        if (check.countInCart < product.quanity) {
                            check.countInCart++;
                            check.checkOutSumary = check.price * check.countInCart;
                            const count = context.state.cart.count + 1;
                            const index = context.state.cart.productList.findIndex((product) => product.product_id === check.product_id);
                            const data = { 'countInCart': check.countInCart, 'checkOutSumary': check.checkOutSumary, 'index': index, 'count': count };
                            context.commit('updateCart', data);
                            status = true;
                            message = 'Thêm vào giỏ hàng thành công';
                        }
                        else {
                            message = 'Mặt hàng này đã hết';
                        }
                    }
                }
                else {
                    message = 'Mặt hàng này đã hết';
                }
                let instance = $toast.open({
                    message: message,
                    type: status ? 'success' : 'error',
                    position: 'top-right'
                });
                return status;
            },
            async removeProductAction(context, data) {
                await setTimeout(() => {
                    context.commit('removeProduct', data.id);
                }, 200);
            },
            async changeAmountProductsAction(context, data) {
                await setTimeout(() => {
                    context.commit('changeAmountProducts', data);
                }, 200);
            }
        }
    })
