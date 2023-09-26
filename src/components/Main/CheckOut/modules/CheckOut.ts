import { mapState, mapMutations, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { useForm, useField } from 'vee-validate';
import { required } from '@vee-validate/rules';
export default {
    data() {
        return {
            customer_name: '',
            customer_phone: '',
            customer_address: '',
            customer_email: '',
            payment_method: '',
            order_comment: '',
            defineInputBinds: null,
            handleSubmit: null,
            errors: null,
        }
    },
    components: {

    },
    onMounted() {

    }
    , setup() {
        const { handleSubmit } = useForm();
        const { value: customer_name, errorMessage: customerNameError } = useField(
            'customer_name',
            required
        );
        const { value: customer_address, errorMessage: customerAddressError } = useField(
            'customer_address',
            required
        );
        const { value: customer_phone, errorMessage: customerPhoneError } = useField(
            'customer_phone',
            required
        );

        const submitForm = handleSubmit(() => {
            if (customerNameError.value || customerAddressError.value || customerPhoneError.value) {
                return;
            }
            console.log('ok nhé')
            // call api
        });

        return {
            customer_name,
            customer_address,
            customer_phone,
            customerNameError,
            customerAddressError,
            customerPhoneError,
            submitForm,
        };
    },
    props: {
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
            this.removeProductAction({ id: id });
        },
        changeAmountProducts(id, increase) {
            this.changeAmountProductsAction({ id: id, increase: increase });
        }, checkOut() {
            alert("Bạn đã đặt hàng thành công! đơn hàng của bạn có giá trị " + this.getSumPrice);
            this.cart.productList.forEach(product => {
                this.removeProduct(product.product_id);
            })
            this.$router.push('/')
        }
    }
}