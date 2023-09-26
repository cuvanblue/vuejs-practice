import { computed, ref, defineProps } from "vue";
import { mapState, mapMutations, mapActions } from 'vuex';
import Markdown from 'vue3-markdown-it';
import database from "@/database/database";
export default {
    data() {
        return {
            currentProduct: null,
            images: null
        }
    },
    async created() {
        const data = await database.getDetailProduct(this.$route.params.id);
        this.currentProduct = data.currentProduct;
        this.images = data.images;
    },
    components: {
        Markdown,
    },
    setup() {

    },
    mounted() {

    },
    props: {

    },
    computed: {
        product() {
            return this.currentProduct ? this.currentProduct : false;
        },
        productSpecs() {
            return this.currentProduct.specification.slice(1, -1);
        },
        productDes() {
            return this.currentProduct.description.slice(1, -1);
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