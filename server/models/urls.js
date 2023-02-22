import mongoose from "mongoose"
import validator from "validator"
import express from "express"
import isUrl from "is-url"

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
        unique: [true, "url already present"],
        validate(value){
            if(!isUrl(value)){ 
                throw new Error("enter correct URL"); 
            }
        }
    },
    code6char: {
        type: String
    }
});

const URL = new mongoose.model("URL", urlSchema);
export default URL