const express = require("express");

const userModel = require("../model/user.model");

const userRoute = express.Router();

userRoute.post("/post",async(req,res)=>{
    const {name,score,level} = req.body;

    const newdata = new userModel({name,score,level});
    await newdata.save();
    res.send("data added");
})

userRoute.get("/hard",async(req,res)=>{
    const data= await userModel.find({level: "hard"});
    res.send(data);
})

userRoute.get("/medium",async(req,res)=>{
    const data= await userModel.find({level: "medium"});
    res.send(data);
})

userRoute.get("/low",async(req,res)=>{
    const data= await userModel.find({level: "low"});
    res.send(data);
})

module.exports = userRoute;
