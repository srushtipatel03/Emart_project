import wishlistModel from "../model/wishlist.model";

export default class WishlistServices {
    // ADD TO WISHLIST
    addToWishlist = async (body: any) => {
        return await wishlistModel.create(body);
    }

    // GET ALL WISHLIST
    getAllWishlist = async (body: any) => {
        return await wishlistModel.find(body);
    }

    // GET SPECIFIC WISHLIST
    getWishlist = async (body: any) => {
        return await wishlistModel.findOne(body);
    }

    // GET SPECIFIC WISHLIST BY ID
    getWishlistById = async (body: any) => {
        return await wishlistModel.findById(body);
    }

    // UPDATE WISHLIST
    updateWishlist = async (id: string , body:any) => {
        return await wishlistModel.findByIdAndUpdate(id, {$set: body}, {new: true});
    }
}