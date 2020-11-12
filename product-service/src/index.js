import config from './app/config';
import app from "./app";
import http from 'http';
import { connectMongo } from './app/config/db';


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