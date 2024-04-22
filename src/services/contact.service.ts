import contactModel from "../model/contact.model";

export default class ContactServices {
    // ADD REQUEST
    addNewRequest = async (body: any) => {
        return await contactModel.create(body);
    }

    // GET USER
    getUser = async (body: any) => {
        return await contactModel.findOne(body);
    }
}