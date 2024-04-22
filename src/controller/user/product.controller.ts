import ProductServices from "../../services/product.service";
const productService = new ProductServices();
import { Request, Response } from "express";
import  ReviewServices  from "../../services/review.service";
const reviewService = new ReviewServices();


declare global {
    namespace Express {
        interface Request {
            product?: object | any;
        }
    }
}

// GET ALL PRODUCT
export const getAllProduct = async (req: Request,res: Response) => {
    try {
        let product  = await productService.getAllProduct({ isDelete:false });
        res.status(200).json(product);
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

// GET SPECIFIC PRODUCT
export const getProduct = async (req: Request,res: Response) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        let review = await reviewService.getAllReview(req.query);
        // console.log(review);
        let totalRating = review.reduce((total:number, item:any) => total + item.rating, 0);
        let avgRating = totalRating / review.length;
        console.log(avgRating);
        res.status(200).json({product , totalRating:avgRating});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
}