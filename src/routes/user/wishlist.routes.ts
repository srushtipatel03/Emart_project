import express from "express";
const WishlistRoutes = express.Router();
import {userVerifyToken} from "../../helpers/userVerifyToken";
import { addToWishlist,  deleteWishlist, getAllWishlist } from "../../controller/user/wishlist.controller";


WishlistRoutes.post('/add-New-Wishlist' , userVerifyToken ,  addToWishlist);
WishlistRoutes.get('/get-All-Wishlist', userVerifyToken, getAllWishlist);
WishlistRoutes.delete('/delete-Wishlist' , userVerifyToken , deleteWishlist);

export default WishlistRoutes;