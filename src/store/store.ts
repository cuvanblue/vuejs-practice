
import { createStore } from 'vuex'

// Create a new store instance.

export const store = createStore({
    state() {
        return {
            cartProductsCount: 0
        }
    },
    mutations: {
        async increment(state) {
            //mô phỏng gọi api check product status ....
            setTimeout(() => {
                state.cartProductsCount++
            }, 1000);

        }
    }
})
