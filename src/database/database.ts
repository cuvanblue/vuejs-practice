import axios from "axios";


export default {
    async getIndexProducts() {
        let allProducts, newProducts, hotProducts, error, data;
        await axios.get('http://127.0.0.1:8000/api/product')
            .then(response => {
                const responseData = response.data;
                allProducts = responseData.data.product;
                newProducts = responseData.data.newProduct;
                hotProducts = responseData.data.hotProduct;
            })
            .catch(error => {
                error = error.message;
            });
        data = { allProducts, newProducts, hotProducts, error };
        return data;
    },
    async getDetailProduct(id) {
        let currentProduct, images, error, data;
        await axios.get('http://127.0.0.1:8000/api/product/' + id)
            .then(response => {
                const responseData = response.data;
                currentProduct = responseData.data.currentProduct;
                images = responseData.data.images;
            })
            .catch(error => {
                error = error.message;
            });
        data = { currentProduct, images, error };
        return data;
    }
}