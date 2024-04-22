import productModel from "../model/product.model";
import mongoose, { ObjectId } from "mongoose";

export default class ProductServices {
    // ADD PRODUCT
    addNewProduct = async (body:any) => {
        return await productModel.create(body);
    }

    // GET ALL PRODUCT
    async getAllProduct(query: any) {
        try {
          // Pagination
          let pageNo: number = Number(query.pageNo || 1);
          let perPage: number = Number(query.perPage || 10);
          let skip: number = (pageNo - 1) * perPage;
    
          // Search with keyword
          let search =
            query.search && query.search !== ""
              ? [
                  {
                    $match: {
                      $or: [
                        {
                          title: {
                            $regex: query.search.trim().replace(/\s+/g, " "),
                            $options: "i",
                          },
                        },
                        {
                          description: {
                            $regex: query.search.trim().replace(/\s+/g, " "),
                            $options: "i",
                          },
                        },
                        {
                          category: {
                            $regex: query.search.trim().replace(/\s+/g, " "),
                            $options: "i",
                          },
                        },
                      ],
                    },
                  },
                ]
              : [];
    
          // category wise listing
          let categoryWise =
            query.category && query.category !== ""
              ? [
                  {
                    $match: {
                      category: {
                        $regex: query.category.trim().replace(/\s+/g, " "),
                        $options: "i",
                      },
                    },
                  },
                ]
              : [];
              
          // Product by id
          let productById =
            query.productId && query.productId !== ""
              ? [
                  {
                    $match: {
                      _id: new mongoose.Types.ObjectId(query.productId),
                    },
                  },
                ]
              : [];
    
          let find = [
            { $match: { isDelete: false } },
            ...categoryWise,
            ...search,
            ...productById,
            {
              $skip: skip,
            },
            {
              $limit: perPage,
            },
          ];
    
          let results  = await productModel.aggregate(find);
          let totalPages: number = Math.ceil(results.length / perPage);
    
          return {
            totalCounts: results.length,
            totalPages: totalPages,
            currentPage: pageNo,
            result: results,
          };
        } catch (error) {
          console.log(error);
          return error;
        }
      }

    // GET PRODUCT
    getProduct = async (body:any) => {
        return await productModel.findOne(body);
    }

    // GET PRODUCT BY ID
    getProductById = async (body:any) => {
        return await productModel.findById(body);
    }

    // UPDATE PRODUCT
    updateProduct = async (id: any , body:any) => {
        return await productModel.findByIdAndUpdate(id, {$set: body}, {new: true});
    }

    // DELETE PRODUCT
    deleteProduct = async (id:string) => {
        return await productModel.findByIdAndDelete(id);
    }
}