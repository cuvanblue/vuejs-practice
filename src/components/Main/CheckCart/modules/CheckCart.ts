import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    onMounted() {
    }
    , setup() {

    }, props: {

    }, computed: {
        cartProducts() {
            return this.cart.productList.length > 0 ? this.cart.productList : false;
        },
        ...mapState({
            cart: 'cart'
        }),
        getSumPrice() {
            let s = 0;
            this.cart.productList.forEach(product => {
                s += parseInt(product.checkOutSumary);
            });
            return s;
        }
    }, methods: {
        ...mapActions({
            changeAmountProductsAction: 'changeAmountProductsAction',
            removeProductAction: 'removeProductAction'
        }),
        removeProduct(id) {
            if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
                this.removeProductAction({ id: id });
            }
        },
        changeAmountProducts(id, increase) {
            this.changeAmountProductsAction({ id: id, increase: increase });
        },
        vnd(price) {
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return VND.format(price);
        }
    }
}