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
    if((url.startsWith("http://")== false)&&(url.startsWith("https://")==false)){
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
   shortcode:code,
})
    
        res.status(201).json({
            message:"url created successfully",
            url:{
                newUrl,
            }
        })

})

Router.get("/", async (req,res)=>{

    const urls = await urlModel.find();

    res.status(201).json({
        message:"urls fetched successfully",
        data:{
             urls
        }
    })
})

Router.delete("/:id", async (req,res)=>{
    const {id} = req.params;

    const url = await urlModel.findById(id);

    if(!url){
        return res.status(404).json({
            message:"url not found"
        })

    }

    await urlModel.findByIdAndDelete()

    return res.status(201).json({
        message:"url deleted successfully"
    })
})


export default Router;