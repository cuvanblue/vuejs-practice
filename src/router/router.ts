import Vue from 'vue';
import * as VueRouter from 'vue-router';
import MainIndex from '../components/Main/MainIndex/MainIndex.vue';
import CheckCart from '../components/Main/CheckCart/CheckCart.vue';
import CheckOut from '../components/Main/CheckOut/CheckOut.vue';
import ProductDetail from '../components/Main/ProductDetail/ProductDetail.vue';
const routes = [
    { path: '/', component: MainIndex },
    { path: '/check-cart', component: CheckCart },
    { path: '/check-cart/check-out', component: CheckOut },
    { path: '/product-detail/:id', component: ProductDetail }

]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
export default router;