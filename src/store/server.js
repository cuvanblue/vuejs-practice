// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let cart = {
    count: 0,
    productList: []
};

// Lấy thông tin giỏ hàng
app.get('/api/cart', (req, res) => {
    res.json(cart);
});

// Thêm sản phẩm vào giỏ hàng
app.post('/api/cart', (req, res) => {
    const product = req.body;
    cart.productList.push(product);
    cart.count += 1;
    res.json(cart);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});