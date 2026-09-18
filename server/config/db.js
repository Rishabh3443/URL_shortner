import mongoose from "mongoose"
import config from "./config.js";


const dbConnect = async()=>{
    console.log("mongo link=>", config.MONGO_URI)
 await mongoose.connect(config.MONGO_URI);
 console.log("db connected");
}

export default dbConnect;