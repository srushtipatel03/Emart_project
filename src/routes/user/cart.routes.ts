import express from "express";
const cartRoutes = express.Router();
import { userVerifyToken } from "../../helpers/userVerifyToken";
import {
    addToCart,
    getAllCart,
    getCart,
    updateCart,
    deleteCart
} from "../../controller/user/cart.controller";


cartRoutes.post('/add-To-Cart', userVerifyToken, addToCart);
cartRoutes.get('/get-All-Cart', userVerifyToken, getAllCart);
cartRoutes.get('/get-Cart', userVerifyToken, getCart);
cartRoutes.put('/update-cart', userVerifyToken, updateCart);
cartRoutes.delete('/delete-Cart', userVerifyToken, deleteCart);

export default cartRoutes;