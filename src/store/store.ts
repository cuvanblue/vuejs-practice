
import { createStore } from 'vuex'
import Product from '../components/Main/Product/modules/Product';
import * as db from '../../testDataBase.json';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
// Create a new store instance.

export const store = createStore({
    state() {
        return {
            cart: {
                count: 0,
                productList: []
            }
        }
    },
    mutations: {
        addToCart(state, id) {
            state.cart.count++;
            let check = !state.cart.productList.find((product) => { product.id === id }) ? false : state.cart.productList.find((product) => { product.id === id });
            // kiểm tra xem sp đã có trong cart hay chưa, nếu có thì tăng count, chưa có thì thêm sp 
            if (!check) {
                let newProduct = db.products.find((product) => product.id === id);
                let obj = { ...newProduct, count: 1, sumary: newProduct?.price };
                state.cart.productList.push(obj);
            }
            else {
                let newProduct = db.products.find((product) => product.id === id);
                check.count++;
                newProduct.quanity = parseInt(newProduct.quanity) - 1;
                check.sumary = newProduct?.price * check.count;
            }
            const $toast = useToast();
            let instance = $toast.open({
                message: 'You did it!',
                type: 'success',
                position: 'top-right'
            });
        },
        removeProduct(state, id) {
            const index = state.cart.productList.findIndex((product) => product.id === id);
            state.cart.count -= state.cart.productList[index].count;
            state.cart.productList.splice(index, 1);
        }
        , changeAmountProducts(state, infor) {
            const index = state.cart.productList.findIndex((product) => product.id === infor.id);
            state.cart.productList[index].sumary = infor.increase * state.cart.productList[index].price + parseInt(state.cart.productList[index].sumary);
            state.cart.productList[index].count += infor.increase;
            state.cart.count += infor.increase;
            if (state.cart.productList[index].count == 0) {
                state.cart.productList.splice(index, 1);
            }
        }
    },
    actions: {
        async addToCartAction(context, data) {
            await setTimeout(() => {
                context.commit('addToCart', data.id);
            }, 200);
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
