import { mapState, mapMutations, mapActions } from 'vuex';
import * as db from '../../../../../testDataBase.json';
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
                s += parseInt(product.sumary);
            });
            return s;
        }
    }, methods: {
        ...mapActions({
            changeAmountProductsAction: 'changeAmountProductsAction',
            removeProductAction: 'removeProductAction'
        }),
        removeProduct(id) {
            this.removeProductAction({ id: id });
        },
        changeAmountProducts(id, increase) {
            this.changeAmountProductsAction({ id: id, increase: increase });
        }, checkOut() {
            alert("Bạn đã đặt hàng thành công! đơn hàng của bạn có giá trị " + this.getSumPrice);
            this.cart.productList.forEach(product => {
                this.removeProduct(product.id);
            })
            this.$router.push('/')
        }
    }
}