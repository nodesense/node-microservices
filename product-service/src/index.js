import config from './app/config';
import app from "./app";
import http from 'http';
import { connectMongo } from './app/config/db';

import './app/config/rabbit-mq';
import {redisClient} from './app/config/redis-db';
const redis = require("redis");

//redisClient.set("key", "value", redis.print);
//redisClient.get("key", redis.print);

const startServer = async () => {
    try {
        await connectMongo(); // if db not available, server is not started
        console.log("database connected successfully");
        var server = http.createServer(app)
 
        server.listen(config.PORT, 
            config.HOST, 
            function(err){
               if (err) {
                   console.error("Could not listen ", err);
                   return;
               };
               console.log("callback ", server.address());
        })

    }
    catch(err) {
        console.log("Error while connecting database", err)
        process.exit(-1); // unhappy exit
    }
}

startServer();