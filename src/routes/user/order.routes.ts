const express = require('express');
const orderRoute = express.Router();
import { userVerifyToken } from "../../helpers/userVerifyToken";
import {
    addNewOrder,
    getAllOrder,
    getOrder,
    deleteOrder
} from "../../controller/user/order.controller";


orderRoute.post('/add-New-Order', userVerifyToken, addNewOrder);
orderRoute.get('/get-All-Order', userVerifyToken, getAllOrder);
orderRoute.get('/get-Order', userVerifyToken, getOrder);
orderRoute.delete('/delete-Order', userVerifyToken, deleteOrder);

export default orderRoute;