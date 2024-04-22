import express from "express";
import { userVerifyToken } from "../../helpers/userVerifyToken";
import { sendRequestUser } from "../../controller/user/contact.controller";

const userRoutes = express.Router();


userRoutes.post("/send-Request-User", userVerifyToken, sendRequestUser);

export default userRoutes;