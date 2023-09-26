import { computed, ref, defineProps } from "vue";
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            quanityState: 0
        }
    },
    setup() {
    },
    mounted() {
        this.quanityState = parseInt(this.quanity);
    },
    props: {
        id: Number,
        title: String,
        thumbnailUrl: String,
        price: String,
        quanity: Number
    },
    computed: {
        checkStatusProduct() {
            return this.quanityState > 0 ? "Sẵn hàng" : "Hết hàng";
        }
    },
    methods: {
        addProductsToCart() {

            if (this.quanityState > 0) {
                this.addToCartAction({ id: this.id });
                this.quanityState--;
            }
            else alert('Sản phẩm này đã hết hàng');
        },
        ...mapActions({
            addToCartAction: 'addToCartAction'
        }),
        vnd(price) {
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return VND.format(price);
        }
    }

}