import express from "express";
const cartRoutes = express.Router();
import { adminVerifyToken } from "../../helpers/adminVerifyToken";
import {
    getAllCart
} from "../../controller/admin/cart.controller";


cartRoutes.get('/get-All-Cart', adminVerifyToken , getAllCart);

export default cartRoutes;