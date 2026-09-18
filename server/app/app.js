import express from "express";
import dbConnect from "../config/db.js";
import Router from "../routes/url.route.js";
import generateCode from "../utils/generateCode.js";
import urlModel from "../models/url.model.js";

const app = express();

app.use(express.json());

app.use("/api/url", Router)

app.get("/:code", async (req,res)=>{
    const {code}= req.params
    
    const url = await urlModel.findOne({
        shortcode:code
    }
    )

    if(!url){
        return res.status(400).json({
            error:"URL not found"
        })
    }

    res.redirect(302,url.originalUrl)

    await urlModel.findOneAndUpdate({
        shortcode:code
    },
{
    $inc:{clicks:1}
})
})


await dbConnect();
 generateCode()


export default app;