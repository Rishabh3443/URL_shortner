import express from "express";
import generateCode from "../utils/generateCode.js";
import urlModel from "../models/url.model.js";

const Router = express.Router()


Router.post("/", async (req,res)=>{
    const {url} = req.body;

    if(!url){
        return res.status(400).json({
            error:"url is required"
        })
    }
    if((url.startwith("http://")== false)&&(url.startwith("https://")==false)){
        return res.status(400).json({ error: "Please enter a valid URL starting with http:// or https://"})
    }
    if(url.length>2048){
        res.status(400).json({
            error:"url is too long"
        })
    }

    const code = generateCode();

const newUrl = await urlModel.create({
   originalUrl:url,
   shortCode:code,
})
    
        res.status(201).json({
            message:"url created successfully",
            url:{
                newUrl,
            }
        })

})


export default Router;