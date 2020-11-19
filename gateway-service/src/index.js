// npm i http-proxy-middleware
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();

const authMiddleware = (req, res, next) => {
    return res.status(404).json({'reason': 'bad call'})
}

app.use('/api/products',  createProxyMiddleware({ target: 'http://localhost:7070', changeOrigin: true }));
app.use('/api/brands',  createProxyMiddleware({ target: 'http://localhost:7070', changeOrigin: true }));
app.use('/api/orders',  authMiddleware, createProxyMiddleware({ target: 'http://localhost:7070', changeOrigin: true }));


app.use('/products',  createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

app.listen(3000);