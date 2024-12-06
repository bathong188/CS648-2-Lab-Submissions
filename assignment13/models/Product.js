import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  id: { type: Number, required: true },
  product: {
    productid: { type: Number, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    instock: { type: Boolean, default: true },
  },
});

const Product = model('Product', productSchema);

export default Product;