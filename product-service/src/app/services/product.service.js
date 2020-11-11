import mongoose from 'mongoose';

const Product = mongoose.model("Product");

class ProductService {
    // NEED STAGE-3 with babel, 
    async find()  {
        try {
            const queryOptions = {}
            const count = await Product.count(queryOptions)
            const products = await Product.find(queryOptions)
            console.log('products', products)
            console.log("Count ", count)
            return products;
        }
        catch(error) {
            throw error;
        }
    }
}

const productService = new ProductService();
export {productService};