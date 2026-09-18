import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({

    originalurl:{
        type:String,
        required:true,
    },
    shortcode:{
        type:String,
        required:true,
    },
    clicks:{
      type:String,
      default:0,
    }

})

const urlModel = mongoose.model("url",urlSchema);

export default urlModel;