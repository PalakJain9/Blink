import mongoose from "mongoose"
import isUrl from "is-url"
import { nanoid } from "nanoid"

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: [true, "url already present"],
        validate(value){
            if(!isUrl(value)){ 
                throw new Error("enter correct URL"); 
            }
        }
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(6)
    }
});

const URL = new mongoose.model("URL", urlSchema);
export default URL