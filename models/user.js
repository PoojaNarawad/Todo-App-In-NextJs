import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[6, "Password too short"]
    },
});


mongoose.model = {};
export  const User = mongoose.model("User", UserSchema);