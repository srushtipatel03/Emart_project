import express from "express";
const wishlistRoutes = express.Router();
import { adminVerifyToken } from "../../helpers/adminVerifyToken";
import {
    getAllWishlist
} from "../../controller/admin/wishlist.controller";


wishlistRoutes.get('/get-All-Wishlist', adminVerifyToken , getAllWishlist);

export default wishlistRoutes;