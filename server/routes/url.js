import mongoose from "mongoose";
import express, { json } from "express"
import URL from "../models/urls.js";

const urlRouter = express.Router()

urlRouter.get("/shorten", async (req, res) => {
    try{
        const data = await URL.find();
        res.status(200).send(data);
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

urlRouter.post("/shorten", async (req, res) => {
    const inputLongUrl = req.body.longUrl;
    try {
        const isPresent = await URL.find({longUrl: inputLongUrl});
        if(isPresent.length == 0){ 
            const newEntry = await new URL(req.body);
            const data = await newEntry.save();
            res.status(201).send(data);
        }
        else {
            res.status(200).send(isPresent);
        }
    }
    catch(e) {
        res.status(400).send(e.message);
    }
})
export default urlRouter