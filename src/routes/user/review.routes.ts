const express = require('express');
const ReviewRoutes = express.Router();
import { userVerifyToken } from "../../helpers/userVerifyToken";
import { addReview, getAllReview ,  deleteReview } from "../../controller/user/review.controller";


ReviewRoutes.post('/add-New-Review' , userVerifyToken,  addReview);
ReviewRoutes.get('/get-All-Review' , userVerifyToken,  getAllReview);
ReviewRoutes.delete('/delete-Review' , userVerifyToken , deleteReview);

export default ReviewRoutes;