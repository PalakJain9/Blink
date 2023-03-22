import mongoose from "mongoose";
import express, { json } from "express"
import URL from "../models/urls.js";

const urlRouter = express.Router()

urlRouter.get("/shorten/:shortCode", async (req, res) => {
    const code = req.params.shortCode;
    try{
        const data = await URL.find({shortCode: code});
        res.status(200).send(data[0].url);
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

urlRouter.post("/shorten", async (req, res) => {
    const inputLongUrl = req.body.url;
    try {
        const isPresent = await URL.find({url: inputLongUrl});
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

urlRouter.patch("/shorten/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const newVal = req.body;
        const data = await Placement.updateOne({_id: _id}, {$set: newVal});
        res.send("updated successfully");
    }
    catch(e) {res.status(500).send(e.message)}
});
export default urlRouter