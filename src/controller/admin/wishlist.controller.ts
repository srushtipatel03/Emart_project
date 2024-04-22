import WishlistServices  from "../../services/wishlist.service";
import { Request, Response } from "express";
const wishlistService = new WishlistServices();

// GET ALL WISHLIST
export const getAllWishlist = async (req: Request,res: Response) => {
    try {
      let wishlist = await wishlistService.getAllWishlist(req.query);
      res.status(200).json(wishlist);
    } catch (error) {
      console.log(error);
      res.status(500).json({ Message: "Internal server Error" });
    }
  }