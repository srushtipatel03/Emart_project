import ContactServices from "../../services/contact.service";
import { Request, Response } from "express";
const contactService = new ContactServices();


declare global{
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

// SEND REQUEST USER
export const sendRequestUser = async (req: Request, res: Response) => {
    try {
        let user = await contactService.getUser({name: req.user.name});
        // console.log(user);
        if(user){
            return res.status(400).json({ message: `User is Already Sending Request...`});
        }
        user = await contactService.addNewRequest({
            ...req.body,
            user:req.user._id
        });
        res.status(201).json({admin: user, message: `New Request added SuccesFully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}`});   
    }
}   