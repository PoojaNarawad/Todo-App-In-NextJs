import mongoose from "mongoose";


export const connectDB = async () => {

const {connection} = await mongoose.connect(process.env.MONGO_URI,{
    dbName:"NextTodo",
});
console.log(`Database connected on ${connection.host}`);
};