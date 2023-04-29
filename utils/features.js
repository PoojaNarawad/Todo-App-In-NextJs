import { serialize } from "cookie";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "NextTodo",
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
  console.log(`Database Connected on ${connection.host}`);
};

export const cookieSetter = (res,token, set) => {

  res.setHeader("Set-Cookie", serialize("token",set?token:"", {
    path:"/",
    httpOnly:true,
    maxAge:set?15*60*60*1000:0,
  } ));
};

export const generateToken = (_id) => {

  return jwt.sign({_id},process.env.JWT_SECRET)
}