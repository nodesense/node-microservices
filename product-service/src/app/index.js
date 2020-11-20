import config from './config';
import express from 'express';

import configureAccessLog from './config/access-log';

import {productRoutes} from './routes';

import {redisClient} from './config/redis-db';
import { publish, subscribe } from './config/rabbit-mq';

// npm install yamljs swagger-ui-express
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./docs/swagger.yml');

const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../../docs/swagger.json');

console.log('config', config);

subscribe("reviews_queue");

const app = express();
app.use(express.json());

configureAccessLog(app);

app.use(productRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
    res.json({'hello': 'world'})
})
 
app.get('/page-visit', (req, res) => {
    redisClient.get("page_visit", function(err, resp) {
        if(resp) {
            res.json({page_visit: resp})
            redisClient.set("page_visit", JSON.stringify(+resp + 1), function(err, resp) {});
        } else {
            redisClient.set("page_visit", JSON.stringify(1), function(err, resp) {
                res.json({page_visit: 1})
            });
        }
    });

})


app.post('/reviews', (req, res) => {
    console.log(req.body);
    publish("reviews_queue", {operation: 'insert', id: req.body.id});
    
    res.json(req.body)
})

// do not use listen here as we need to run the test case

export default app;