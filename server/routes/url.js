import mongoose from "mongoose";
import express from "express"
import URL from "../models/urls.js";
const urlRouter = express.Router()

urlRouter.get("/shorten", async (req, res) => {
    try{
        //const data = await URL.find();
        res.send("hi")
        //res.status(200).send(data);
    }
    catch(e){
        console.log(e);
    }
})

urlRouter.post("/shorten", async (req, res) => {
    const longUrl = req.body;
    try {
        //const isPresent = await URL.find({longUrl: longUrl});
        const newEntry = new URL(req.body);
        const data = await newEntry.save();
        res.status(201).send(data);
    }
    catch(e) {
        res.status(400).send(e.message);
    }
})
export default urlRouter