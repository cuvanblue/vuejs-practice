import { computed, onBeforeMount, onMounted, onRenderTracked, onRenderTriggered } from 'vue';
import { mapState, mapActions } from 'vuex';
export default {
    setup() {
        // console.log('setup!');
        // onBeforeMount(() => {
        //     console.log('before mount!');
        // })
        // onRenderTracked(() => {
        //     console.log('render tracked!');
        // })
        // onRenderTriggered(() => {
        //     console.log('render trigger!');
        // })

    },
    computed: {
        ...mapState(
            ["cart"]
        ),
        // cach 2
        // ...mapState({
        //     cartCount: 'cartProductsCount'
        // })

    }, methods: {
    }
}