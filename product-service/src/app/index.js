import config from './config';
import express from 'express';

import configureAccessLog from './config/access-log';

import {productRoutes} from './routes';

console.log('config', config);

const app = express();

configureAccessLog(app);

app.use(productRoutes);

app.get('/', (req, res) => {
    res.json({'hello': 'world'})
})
 

export default app;