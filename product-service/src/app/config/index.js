require('dotenv').config();

// ensure we initialize mongoose schemas at least once
import '../models';


export default {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/test',
    HOST: process.env.HOST || 'localhost',
    PORT: +process.env.PORT || 8080
}