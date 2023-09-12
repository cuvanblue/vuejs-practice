import { ref } from "vue";
export default {
    tong(a, b) {
        return a + b;
    },
    giaithua(a) {
        if (a == 0 || a == 1) return 1;
        return a * this.giaithua(a - 1);
    },
    a: [5],
    count: ref(0),
    incrementCount(a) {
        this.count.value += a;
    }

}