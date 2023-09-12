<script setup>

</script>
<template>
  <div class="header">
    <div class="top-header">
      <a class="logo">
        <img src="img/header-logo.png" alt="header-logo brand-logo sieuthimaytinhlangson">
      </a>
      <div class="search-bar">
        <form class="search-form" action="" method="POST">
          <input type="text" name="keyword" placeholder="Tìm kiếm...">
          <button type="submit"><img src="img/search-icon.svg" alt="search-icon"></button>
        </form>
        <div class="header-contact">
          <img src="img/header-call.svg" alt="header-call">
          <span>Hotline:</span>
          <span style="color: #DD4333; font-weight: 600;">08 888 03 999</span>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="navbar-container">
        <div class="category-button">
          <img src="img/menu-button.svg" alt="menu-button">
          <span class="title">DANH MỤC SẢN PHẨM</span>
          <div class="menu"></div>
        </div>
        <div class="navbar-main">
          <div class="navbar-pc">
            <a href="" style="color: #FAEB31;">TRANG CHỦ</a>
            <a href="">GIỚI THIỆU</a>
            <a href="">SẢN PHẨM</a>
            <a href="">TIN TỨC</a>
            <a href="">VIDEO</a>
            <a href="">HỖ TRỢ KHÁCH HÀNG</a>
            <a href="">LIÊN HỆ</a>
          </div>
          <div class="navbar-mobile">
            <form class="search-form-mobile" action="" method="post">
              <input class="search-bar-mobile" type="text" name="keyword" id="" placeholder="Tìm kiếm...">
              <button type="submit"><img src="img/search-icon.svg" alt="search-icon"></button>
            </form>
          </div>
          <div class="cart">
            <a href=""><span class="counter">{{ this.$store.state.cartProductsCount }}</span><img src="img/cart.png"
                alt="cart-icon"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.logo img {
  max-height: 80px;
}

.search-bar {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
}

.search-form {
  display: flex;
  flex-direction: row;
  height: 35px;
  width: 380px;
  margin-right: 50px;
  border: 1px solid #a9a9a9;
}

.search-form input {
  border: none;
  width: 100%;
}

.search-form button {
  background-color: #EF233C;
  border: none;
  padding: 0 10px;
}

.header-contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2.4em;
}

.header-contact span {
  white-space: nowrap;
  margin-left: 10px;
}

/* navbar */
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: #EF233C;
  color: white;
  font-size: 1.7em;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.category-button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  padding: 20px 0;
  background-color: #D92037;
  cursor: pointer;
}

.category-button img {
  padding: 0 15px;
}

.navbar-mobile {
  display: none;
}

.navbar-main {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 250px);
}

.navbar-pc {
  padding: 20px 15px;
}

.navbar-pc a {
  padding: 0 9px;
}

.cart {
  padding: 20px 15px;
  background-color: #D92037;
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

  .navbar {
    font-size: 1em;
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
