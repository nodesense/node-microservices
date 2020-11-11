import {productService} from '../services';

export const findProducts = async (req, res) => {
    try {
        const products = await productService.find();
        res.json(products)
    }
    catch(error) {
        // Use error handlers
        res.status(422).send(error);
    }
}