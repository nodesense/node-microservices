// npm i http-proxy-middleware
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();
 
app.use('/api',  createProxyMiddleware({ target: 'http://localhost:7070', changeOrigin: true }));
app.use('/products',  createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

app.listen(3000);