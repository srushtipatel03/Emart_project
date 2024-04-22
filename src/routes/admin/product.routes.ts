import express from "express";
const productRoutes = express.Router();
import { adminVerifyToken } from "../../helpers/adminVerifyToken"; 
const {
    addNewProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../../controller/admin/product.controller');


productRoutes.post('/add-Product', adminVerifyToken , addNewProduct);
productRoutes.get('/get-All-Product', adminVerifyToken , getAllProduct);
productRoutes.get('/get-Product', adminVerifyToken , getProduct);
productRoutes.put('/update-Product', adminVerifyToken , updateProduct);
productRoutes.delete('/delete-Product', adminVerifyToken , deleteProduct);

export default productRoutes;