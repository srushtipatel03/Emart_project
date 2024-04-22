import express from "express";
import { adminVerifyToken } from "../../helpers/adminVerifyToken";
import { registerAdmin, 
    loginAdmin, 
    getAllAdmin, 
    getAdmin, 
    updateAdmin, 
    deleteAdmin, 
    updatePassword } from "../../controller/admin/admin.controller";

const adminRoutes = express.Router();


adminRoutes.post("/register-Admin" , registerAdmin);
adminRoutes.post("/login-Admin" , loginAdmin);
adminRoutes.get("/get-All-Admin" , adminVerifyToken , getAllAdmin);
adminRoutes.get("/get-Admin" , adminVerifyToken , getAdmin);
adminRoutes.put("/update-Admin" , adminVerifyToken , updateAdmin)
adminRoutes.delete("/delete-Admin" , adminVerifyToken , deleteAdmin);
adminRoutes.put("/update-Password" , adminVerifyToken , updatePassword);

export default adminRoutes;