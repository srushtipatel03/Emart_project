import express from 'express';
const ReviewRoutes = express.Router();
import {  adminVerifyToken }  from "../../helpers/adminVerifyToken";
import {  getAllReview ,  deleteReview } from "../../controller/admin/review.controller";


ReviewRoutes.get('/get-all-Review' , adminVerifyToken,  getAllReview);
ReviewRoutes.delete('/delete-Review' , adminVerifyToken , deleteReview);

export default ReviewRoutes;