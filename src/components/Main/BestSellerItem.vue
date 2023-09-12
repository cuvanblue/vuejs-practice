<script setup>
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

<template>
    <div class="best-seller-item">
        <div class="product-thumbnail">
            <img class="thumbnail" :src="thumbnailUrl" alt="sanpham5">
        </div>
        <div class="description">
            <span class="product-name">{{ title }}</span>
            <span class="product-price">{{ price }}</span>
            <span class="product-status">{{ status }}</span>
        </div>
    </div>
</template>

<style >
.best-seller-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
    border-top: 1px solid #ccc;
}

.best-seller-item .product-thumbnail {
    display: flex;
    align-items: center;
    width: 85px;
    max-height: 77px;
    border: 1px solid #ccc;
    margin: 0;
}

.best-seller-item .product-thumbnail .thumbnail {
    width: 100%;
}

.best-seller-item .description {
    width: calc(100% - 100px);
    font-size: 0.6em;
}

.best-seller-item span {
    overflow: hidden;
    display: block;
    margin: 0 !important;
}

.best-seller-item .product-name {
    font-size: 1.7em;
    line-height: 22px;
    height: 45px;
}

.best-seller-item .product-price {
    font-size: 1.5em;
    text-align: left;
}

.best-seller-item .product-status {
    font-size: 1.5em;
}
</style>