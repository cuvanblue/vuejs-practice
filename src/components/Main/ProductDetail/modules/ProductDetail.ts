import { computed, ref, defineProps } from "vue";
import { mapState, mapMutations, mapActions } from 'vuex';
import * as db from '../../../../../testDataBase.json';
export default {
    data() {
        return {

        }
    },
    components: {
    },
    setup() {

    },
    mounted() {

    },
    props: {

    },
    computed: {
        product() {
            let id = this.$route.params.id;
            const findProduct = db.products.find((product) => product.id === id);
            return findProduct ? findProduct : false;
        },
        productPrice() {
            const VND = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return VND.format(this.product.price);
        }
    },
    methods: {
        changeAmount(increase) {
            this.$refs.amountDetailProduct.value = increase + parseInt(this.$refs.amountDetailProduct.value);
            if (this.$refs.amountDetailProduct.value < 0) {
                this.$refs.amountDetailProduct.value = 0;
            }
        }
    }

}