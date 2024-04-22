import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: [{
        type: String
    }],
    size: {
        type: String
    },
    color: {
        type: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
    versionKey: false,
    timestamps: true
});

const productModel =  mongoose.model('products', productSchema);
export default productModel