import express from "express";
import { userVerifyToken } from "../../helpers/userVerifyToken";
import {
  registerUser,
  loginUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  updatePassword
} from "../../controller/user/user.controller";

const userRoutes = express.Router();


userRoutes.post("/register-User", registerUser);
userRoutes.post("/login-User", loginUser);
userRoutes.get("/get-All-User", userVerifyToken , getAllUser);
userRoutes.get("/get-User", userVerifyToken , getUser);
userRoutes.put("/update-User", userVerifyToken , updateUser);
userRoutes.delete("/delete-User", userVerifyToken , deleteUser);
userRoutes.put("/update-Password", userVerifyToken , updatePassword);

export default userRoutes;