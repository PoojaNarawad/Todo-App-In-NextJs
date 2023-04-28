
import mongoose from "mongoose";


export const connectDB = () => {

await mongoose.connect(process.env.MONGO_URI,{
    dbName:"NextTodo",
})
};