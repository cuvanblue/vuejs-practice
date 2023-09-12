<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>
<template>
    <div class="aside-title">
        <span><strong>{{ title }}</strong></span>
    </div>
</template>
<style >
.aside-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;
    padding: 0.8em 0;
    background-color: #EF233C;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.aside-title span {
    color: white;
}
</style>