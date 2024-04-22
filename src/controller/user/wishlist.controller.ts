import WishlistServices from "../../services/wishlist.service";
import { Request, Response } from "express";
const wishlistService = new WishlistServices();

declare global {
  namespace Express {
      interface Request {
          user?: any;
      }
  }
}

// ADD NEW WISHLIST
export const addToWishlist = async (req: Request,res: Response) => {
  try {
    let wishlist = await wishlistService.getWishlist({
      product: req.body.product,
      user: (req.user as any )._id,
      isDelete: false,
    });
    if (wishlist) {
      return res.status(400).json({ Message: "Wishlist is alredy exist" });
    }
    wishlist = await wishlistService.addToWishlist({ ...req.body, user: (req.user as any )._id });
    res.status(201).json({ wishlist, Message: "Wishlist is Added..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};

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

// DELETE WISHLIST
export const deleteWishlist = async (req: Request,res: Response) => {
  try {
    let wishlist = await wishlistService.getWishlistById(req.query.Id);
    if (!wishlist) {
      return res.status(404).json({ Message: "Wishlist is not found" });
    }
    wishlist = await wishlistService.updateWishlist(wishlist._id, {
      isDelete: true,
    });
    res.status(202).json({ wishlist, Message: "Wishlist is Deleted..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};