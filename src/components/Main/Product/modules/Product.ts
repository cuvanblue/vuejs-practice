import { computed, ref, defineProps } from "vue";
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {

        }
    },
    setup() {
    },
    props: {
        id: String,
        title: String,
        thumbnailUrl: String,
        price: String,
        status: String
    },
    computed: {

    },
    methods: {
        addProductsToCart(id) {
            this.incrementMutation(parseInt(id));
            console.log('toi duoc goi' + id);
        },
        ...mapMutations({
            incrementMutation: 'increment'
        }),
        ...mapActions({
            incrementAction: 'increment'
        })
    }

}