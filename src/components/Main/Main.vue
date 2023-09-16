<script setup>
import CategoryMenuRow from './CategoryMenuRow.vue';
import AsideTitle from './AsideTitle.vue';
import BestSellerItem from './BestSellerItem.vue';
import Product from './Product/Product.vue';
import testDataBase from '../../../testDataBase.json';
import { onBeforeMount, onMounted, onRenderTracked } from 'vue';

</script>

<template>
    <div class="main">
        <div class="top-main">
            <div class="aside">
                <div class="category">
                    <CategoryMenuRow v-for="category in testDataBase.categories" :title="category" />
                </div>
                <div class="online-support">
                    <AsideTitle title="HỖ TRỢ TRỰC TUYẾN" />
                    <img class="thumbnail" src="img/img-support.png" alt="imgsupport">
                    <p>Tư Vấn Bán Hàng</p>
                    <p><img src="img/phone-calling.svg" alt="phone-call">08 888 03 999</p>
                    <p><img src="img/mail-to.svg" alt="phone-call">sieuthimaytinhls@gmail.com</p>
                </div>
                <div class="best-seller">
                    <AsideTitle title="SẢN PHẨM BÁN CHẠY" />
                    <div class="best-seller-slide">
                        <div class="scroll-top" onclick="bestSellerScroll(1);">
                            <img src="img/chevron-up.svg" alt="">
                        </div>
                        <div id="best-seller-container-id" class="best-seller-container">
                            <div id="best-seller-items-id" class="best-seller-items">
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                                <BestSellerItem title='Laptop Dell Inspiron 14 7425 2-in-1 (AMD Ryzen
                                            5-5625U/Ram 8G/SSD 512G/ 14" FHD)' thumbnailUrl="img/sanpham5.jpg"
                                    price="18.000.000đ" status="Sẵn hàng" />
                            </div>
                        </div>
                        <div onclick="bestSellerScroll(-1);" class="scroll-bottom">
                            <img src="img/chevron-up.svg" alt="" style="transform: scaleY(-1)">
                        </div>
                    </div>
                </div>
                <div class="online-support">
                    <AsideTitle title="TIN TỨC MƯỚI" />
                    <div class="news-container">
                        <div class="best-seller-item">
                            <div class="product-thumbnail">
                                <img class="thumbnail" src="img/news1.jpg" alt="sanpham5">
                            </div>
                            <div class="description">
                                <span class="product-name" style="height: 65px;">Chính sách bảo vệ thông tin cá nhân của
                                    người tiêu dùng
                                </span>
                            </div>
                        </div>
                        <div class="best-seller-item">
                            <div class="product-thumbnail">
                                <img class="thumbnail" src="img/new2.jpg" alt="sanpham5">
                            </div>
                            <div class="description">
                                <span class="product-name" style="height: 65px;">Chính sách bảo vệ thông tin cá nhân của
                                    người tiêu dùng
                                </span>
                            </div>
                        </div>
                        <div class="best-seller-item">
                            <div class="product-thumbnail">
                                <img class="thumbnail" src="img/news1.jpg" alt="sanpham5">
                            </div>
                            <div class="description">
                                <span class="product-name" style="height: 65px;">Chính sách bảo vệ thông tin cá nhân của
                                    người tiêu dùng
                                </span>
                            </div>
                        </div>
                        <div class="best-seller-item">
                            <div class="product-thumbnail">
                                <img class="thumbnail" src="img/new3.jpg" alt="sanpham5">
                            </div>
                            <div class="description">
                                <span class="product-name" style="height: 65px;">Chính sách bảo vệ thông tin cá nhân của
                                    người tiêu dùng
                                </span>
                            </div>
                        </div>
                        <div class="best-seller-item">
                            <div class="product-thumbnail">
                                <img class="thumbnail" src="img/new2.jpg" alt="sanpham5">
                            </div>
                            <div class="description">
                                <span class="product-name" style="height: 65px;">Chính sách bảo vệ thông tin cá nhân của
                                    người tiêu dùng
                                </span>
                            </div>
                        </div>
                        <div class="best-seller-item">
                            <div class="product-thumbnail">
                                <img class="thumbnail" src="img/new3.jpg" alt="sanpham5">
                            </div>
                            <div class="description">
                                <span class="product-name" style="height: 65px;">Chính sách bảo vệ thông tin cá nhân của
                                    người tiêu dùng
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-container">
                <div class="main-banner">
                    <div class="image-container">
                        <img id="banner-1" src="img/main-banner.png" alt="main-banner">
                        <img id="banner-2" class="hidden-banner" src="img/main-banner1.png" alt="main-banner">
                        <img id="banner-3" class="hidden-banner" src="img/main-banner2.png" alt="main-banner">
                    </div>
                    <button onclick="goToBanner(-1,false)" class="left-slide">
                    </button>
                    <button onclick="goToBanner(1,false)" class="right-slide">
                    </button>
                </div>
                <div class="list-product-container">
                    <!-- Sản phẩm mới, hot -->
                    <div class="list-product" style="position: relative;">
                        <div class="list-product-header" style="border: none;justify-content: space-between;">
                            <div>
                                <button class="new-product-button" onclick="showHotNewMenu('new');">SẢN PHẨM
                                    MỚI</button>
                                <button class="hot-product-button" onclick="showHotNewMenu('hot');">SẢN PHẨM
                                    HOT</button>
                            </div>
                            <a class="view-all-link">
                                Xem tất cả
                            </a>
                        </div>
                        <div class="products product-new">
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="1" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="2" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="3" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="4" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="5" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="6" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="7" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="8" />
                        </div>
                        <div class="products product-hot" style="opacity: 0;">
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc1.jfif" status="Sẵn hàng" id="9" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc3.jfif" status="Sẵn hàng" id="10" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc1.jfif" status="Sẵn hàng" id="11" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="12" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="13" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="14" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/lkpc2.jfif" status="Sẵn hàng" id="15" />
                        </div>
                    </div>
                    <!-- Thiết bị mạng -->
                    <div class="list-product">
                        <div class="list-product-header">
                            <img class="left" src="img/left-bg-heading.png" alt="left-bg-heading">
                            <h2><strong>THIẾT BỊ MẠNG</strong></h2>
                            <img class="right" src="img/right-bg-heading.png" alt="red-triangle">
                        </div>
                        <div class="products">
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/sanpham1.jfif" status="Sẵn hàng" id="16" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/sanpham1.jfif" status="Sẵn hàng" id="17" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/sanpham1.jfif" status="Sẵn hàng" id="18" />
                            <Product title="Card mạng không dây USB TP-Link TL-WN725N Wireless" price="18,000,000 đ"
                                thumbnailUrl="img/sanpham1.jfif" status="Sẵn hàng" id="19" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-main">
            <div class="commits">
                <div class="commit">
                    <img class="commit-icon" src="img/commit-icon1.png" alt="commit-icon">
                    <div>
                        <span class="commit-title">GIAO HÀNG TOÀN QUỐC</span>
                        <span class="commit-details">Nhận hàng từ 1-3 ngày</span>
                    </div>
                </div>
                <div class="commit">
                    <img class="commit-icon" src="img/commit-icon2.png" alt="commit-icon">
                    <div>
                        <span class="commit-title">DỊCH VỤ CHUYÊN NGHIỆP</span>
                        <span class="commit-details">Tư vấn hỗ trợ tận tình</span>
                    </div>
                </div>
                <div class="commit">
                    <img class="commit-icon" src="img/commit-icon3.png" alt="commit-icon">
                    <div>
                        <span class="commit-title">HOTLINE 08 888 03 999</span>
                        <span class="commit-details">Kỹ thuật: 083 84 85 888</span>
                    </div>
                </div>
                <div class="commit">
                    <img class="commit-icon" src="img/commit-icon4.png" alt="commit-icon">
                    <div>
                        <span class="commit-title">BẢO ĐẢM CHẤT LƯỢNG</span>
                        <span class="commit-details">Sản phẩm chính hãng, có VAT</span>
                    </div>
                </div>
            </div>
            <div class="brands">
                <div class="brand-container">
                    <div class="brand">
                        <img src="img/brand1.jpg" alt="brand-image">
                    </div>
                    <div class="brand">
                        <img src="img/brand2.jpg" alt="brand-image">
                    </div>
                    <div class="brand">
                        <img src="img/brand3.jpg" alt="brand-image">
                    </div>
                    <div class="brand">
                        <img src="img/brand4.jpg" alt="brand-image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
onMounted(() => {
    let currentTransformY = 0;
    const itemHeight = document.getElementsByClassName("best-seller-item")[0].offsetHeight;
    const slideHeight = document.getElementById("best-seller-container-id").offsetHeight;
    const listItemHeight = document.getElementById("best-seller-items-id").offsetHeight;
    const minTransformY = -1 * Math.abs(slideHeight - listItemHeight), maxTranformY = 0;

    const changeBanner = setInterval(() => {
        goToBanner(1, true);
    }, 3000);

    const viewBestSeller = setInterval(() => {
        bestSellerScroll(-1, true);
    }, 2000);
    console.log(itemHeight);
});
let currentBanner = 1;
let goToBanner = (direct, fromInterval) => {
    let previousBanner = currentBanner;
    if (direct > 0) {
        currentBanner = currentBanner < 3 ? currentBanner + 1 : currentBanner - 2;
    }
    if (direct < 0) {
        currentBanner = currentBanner > 1 ? currentBanner - 1 : currentBanner + 2;
    }
    document.getElementById('banner-' + previousBanner).style.opacity = 0;
    document.getElementById('banner-' + currentBanner).style.opacity = 1;
}
let bestSellerScroll = (direction, fromInterval) => {

    document.getElementById("best-seller-items-id").style.transition = "all 1s ease-in-out";
    let newTransform = direction * itemHeight + currentTransformY;
    if (direction > 0 && currentTransformY < maxTranformY) {   // nếu cuộn lên mà còn chỗ
        currentTransformY = maxTranformY < newTransform ? maxTranformY : newTransform;
    }
    else if (direction < 0 && currentTransformY > minTransformY) {   // nếu cuộn xuống mà còn chỗ
        currentTransformY = minTransformY > newTransform ? minTransformY : newTransform;
    }
    else {
        document.getElementById("best-seller-items-id").style.transition = fromInterval ? "" : "all 1s ease-in-out";
        currentTransformY = direction < 0 ? maxTranformY : minTransformY; // nếu cuộn lên hoặc cuộn xuống không còn chỗ
    }
    document.getElementById("best-seller-items-id").style.transform = "translateY(" + currentTransformY + "px)";
}
let showHotNewMenu = (type) => {
    document.getElementsByClassName("new-product-button")[0].style.backgroundColor = type == "new" ? "#EF233C" : "transparent";
    document.getElementsByClassName("new-product-button")[0].style.color = type == "new" ? "white" : "black";
    document.getElementsByClassName("hot-product-button")[0].style.backgroundColor = type == "hot" ? "#EF233C" : "transparent";
    document.getElementsByClassName("hot-product-button")[0].style.color = type == "hot" ? "white" : "black";
    document.getElementsByClassName("product-hot")[0].style.opacity = type == "hot" ? 1 : 0;
    document.getElementsByClassName("product-new")[0].style.opacity = type == "new" ? 1 : 0;
}
</script>

<style >
.main {
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
}

.top-main {
    display: flex;
    justify-content: space-between;
}

.aside {
    display: inline-block;
}

.category {
    width: 250px;
    border: 1px solid #ccc;
    border-bottom: none;
}

.online-support {
    width: 250px;
    margin-top: 20px;
    font-size: 1.6em;
}

.online-support .thumbnail {
    width: 100%;
}

.online-support p {
    margin: 5px 5px;
}

.online-support p img {
    margin-right: 5px;
}

/* best seller slide */
.best-seller {
    width: 250px;
    margin-top: 20px;
    font-size: 1.6em;
}

.scroll-top {
    width: 100%;
    margin: -20px 0 0 0;
    background-color: white;
    cursor: pointer;
}

.scroll-bottom {
    width: 100%;
    background-color: white;
    cursor: pointer;
}

.scroll-top img,
.scroll-bottom img {
    display: block;
    margin: 0 auto;
}

.best-seller-container {
    width: 100%;
    height: 510px;
    overflow: hidden;
}

.best-seller-items {
    display: flex;
    flex-direction: column;
}

.main-container {
    display: inline-block;
    position: relative;
    width: calc(100% - 270px);
}

.main-banner {
    position: relative;
    ;
}

.main-banner,
.main-banner img {
    width: 100%;
    -webkit-transition: opacity 1s ease-out;
    -moz-transition: opacity 1s ease-out;
    -ms-transition: opacity 1s ease-out;
    -o-transition: opacity 1s ease-out;
    transition: opacity 1s ease-out;
}

.hidden-banner {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

.main-banner button {
    position: absolute;
    top: calc(50% - 25px);
    width: 5%;
    height: 50px;
    background-color: transparent;
    border: none;
    background-image: url('../img/icon-back.png');
    background-position: center;
    background-size: cover;
    display: block;
    margin: 8px;
}

.left-slide {
    left: 0;
}

.right-slide {
    transform: rotate(180deg);
    right: 0;
}

.list-product-container {
    margin-top: 20px;
}

.list-product {
    margin-top: 10px;
}

.list-product-header {
    background-color: #F1F1F1;
    border-bottom: 3px solid #EF233C;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.list-product-header h2 {
    min-width: 132px;
    text-align: left;
    margin: 0;
    padding: 12px 0 9px 0;
    font-size: 1.6em;
    font-weight: normal;
    color: white;
    background-color: #EF233C;
}

.list-product-header button {
    font-size: 1.4em;
    padding: 12px 15px;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 2px solid #EF233C;
    cursor: pointer;
}

.new-product-button {
    color: white;
    background-color: #EF233C;
    margin-right: 3px;
}

.hot-product-button {
    color: black;
    background-color: transparent;
}

.hot-product-button:hover {
    color: white;
    background-color: #EF233C;
}

.view-all-link {
    margin-right: 10px;
    color: grey;
    font-size: 1.2em;
}

.list-product-header img {
    height: calc(1.6em + 23px);
}

.product-hot,
.product-new {}

.product-hot {
    position: absolute;
    bottom: 0;
    left: 0;
}

.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-right: none;
    border-bottom: none;
}

/* bottom main */
.bottom-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    align-items: center;
}

.commits {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 40px 0 40px 0;


}

.commit {
    display: flex;
    width: calc(25% - 13.5px);
}

.commit-icon {}

.commit div {
    width: calc(100% - 50px);
}

.commit-title {
    display: block;
    color: #D92037;
    font-weight: 600;
    font-size: 1.6em;
    padding: 2px 0 0 10px;
}

.commit-details {
    font-size: 1.6em;
    display: block;
    color: rgb(27, 27, 27);
    padding: 5px 0 0 10px;
}

.brands {
    width: calc(100% - 60px);
    background-color: #2B2D42;
    padding: 10px 30px;
}

.brand-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.brand {
    width: calc(15% - 20px);
    margin: 0 10px;
}

.brand img {
    width: 100%;
}

@media only screen and (max-width: 1200px) {
    .navbar-pc {
        display: none;
    }

    .navbar-mobile {
        display: flex;
        align-items: center;
        width: calc(100% - 54px);
    }

    .search-form-mobile {
        display: flex;
        flex-direction: row;
        height: 80%;
        width: 90%;
        margin: 0 3% 0 7%;
    }

    .search-form-mobile input {
        border: none;
        width: 100%;
    }

    .search-form-mobile button {
        background-color: #D92037;
        border: none;
        padding: 0 10px;
    }

    .product-thumbnail {

        width: 100%;
        max-width: 200px;
        margin: 0 auto;
    }

    .commits {
        flex-direction: column;
    }

    .commit {
        width: 100%;
        margin-bottom: 15px;
    }

    .top-footer-container,
    .bottom-footer-container {
        flex-direction: column;
        padding-left: 10px;
    }

    .top-footer-container div {
        width: 100%;
    }

    .information,
    .site-map {
        width: 100%;
    }

    .information {
        margin-top: 20px;
    }
}

@media only screen and (max-width: 1000px) {
    .top-header {
        background-color: #F1F1F1;
    }

    .top-header {
        max-width: 750px;
        justify-content: space-around;
    }

    .search-form {
        display: none;
    }

    .navbar-container {
        max-width: 750px;
    }

    .category-button {
        background-color: #EF233C;
        width: auto;
        padding: 15px 0;
    }

    .category-button span {
        display: none;
    }

    .category-button img {
        width: 25px;
    }

    .navbar-main {
        width: calc(100% - 55px);
    }

    .cart {
        padding: 15px 10px;
    }

    .top-main {
        justify-content: center;
    }

    .aside {
        display: none;
    }

    .main-container {
        width: 100%;
        max-width: 750px;
    }

    .products {
        border: none;
        display: flex;
        justify-content: space-around;
    }

    .product {
        width: calc(50% - 12px);
        margin-bottom: 10px;
        border: 1px solid #ccc;
    }

    .commits,
    .brands {
        max-width: 750px;
    }

    .brands {
        width: 100%;
        padding: 10px 0;
    }

    .top-footer-container,
    .bottom-footer-container {
        max-width: 750px;
    }
}

@media only screen and (max-width: 768px) {
    .top-header {
        flex-direction: column;
    }

    .logo {
        margin: 10px 0;
    }

    .header-contact {
        margin-bottom: 10px;
    }

    .search-form {
        display: none;
    }
}
</style>