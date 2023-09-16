
import { createStore } from 'vuex'

// Create a new store instance.

export const store = createStore({
    state() {
        return {
            cartProductsCount: 0
        }
    },
    mutations: {
        increment(state, number) {
            state.cartProductsCount += number;
        }
    },
    actions: {
        async increment(context) {
            await setTimeout(() => {
                context.commit('increment', 1);
            }, 1000);
        }
    }
})
