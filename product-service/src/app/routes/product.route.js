import express from 'express';

import * as productControllers from '../controllers/product.controller';

const productRoutes = new express.Router();

productRoutes.get('/products', productControllers.findProducts)

export  {productRoutes};