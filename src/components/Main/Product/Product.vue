<script setup>
import Service from './modules/Service';
defineProps({
    title: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
</script>
<template src="./modules/Html.html"></template>
<style src="./modules/Style.css"></style>
<script>
Service.incrementCount(30);
console.log(Service.count.value);
</script>