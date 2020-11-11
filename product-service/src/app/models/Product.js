import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String
}, { collection: 'products' });

const Product = mongoose.model('Product', ProductSchema);

export {Product};
