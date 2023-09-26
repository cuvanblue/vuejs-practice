
import { mapState, mapMutations, mapActions } from 'vuex';
import Product from '../../Product/Product.vue';
import * as db from '../../../../../testDataBase.json';
import axios from 'axios'
import database from '@/database/database';
export default {
    data() {
        return {
            allProducts: null,
            newProducts: null,
            hotProducts: null,
            showNewProducts: true
        }
    },
    async created() {
        const data = await database.getIndexProducts();
        this.allProducts = data.allProducts;
        this.newProducts = data.newProducts;
        this.hotProducts = data.hotProducts;
    },
    components: {
        Product
    },
    setup() {

    },
    mounted() {

    },
    props: {

    },
    computed: {

    },
    methods: {
        showNewProductsChange(kt) {
            this.showNewProducts = kt;
        }
    }

}