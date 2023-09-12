<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <a class="category-menu-1">
        <span class="aside-menu-title">{{ title }}</span>
        <div class="aside-menu-2"></div>
    </a>
</template>
<style >
.category-menu-1 {
    display: block;
    padding: 15px 0 15px 11px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    font-size: 1.5em;
    color: #333333;
}

.category-menu-1:hover {
    background-color: #EF233C;
    color: white;
}
</style>