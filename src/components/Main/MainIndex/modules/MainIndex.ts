
import { mapState, mapMutations, mapActions } from 'vuex';
import Product from '../../Product/Product.vue';
import * as db from '../../../../../testDataBase.json';
import axios from 'axios'
export default {
    data() {
        return {
            allProducts: null,
            newProducts: null,
            hotProducts: null,
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(response => {
                const responseData = response.data;
                this.allProducts = responseData.data.product;
                this.newProducts = responseData.data.newProduct;
                this.hotProducts = responseData.data.hotProduct;
            })
            .catch(error => {
                this.error = error.message;
            });
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
        hotProducts() {
            let a: object[] = [];
            db.hotProducts.forEach(id => {
                let b = db.products.find(product => product.id === id.toString())
                a.push({ b });
            });
            return a;
        },
        newProducts() {
            let a: object[] = [];
            db.newProducts.forEach(id => {
                let b = db.products.find(product => product.id === id.toString())
                a.push({ b });
            });
            return a;
        }
    },
    methods: {

    }

}