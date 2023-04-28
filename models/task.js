import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
});


mongoose.model = {};
export  const User = mongoose.model("Task", schema);