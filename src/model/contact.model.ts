const mongoose = require('mongoose');

const contactSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},
    {
        versionKey:false,
        timestamps:true
});

const contactModel = mongoose.model('contacts', contactSchema);
export default contactModel;