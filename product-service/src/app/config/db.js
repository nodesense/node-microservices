// abstract file to connect to db.

import mongoose from 'mongoose';
import config from '../config';

const connectMongo = () => {
    return mongoose.connect(config.MONGO_URL, {useNewUrlParser: true});
}

export {connectMongo}
