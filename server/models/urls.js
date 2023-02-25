import mongoose from "mongoose"
import isUrl from "is-url"
import shortid from "shortid"

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
        default: shortid.generate()
    }
});

const URL = new mongoose.model("URL", urlSchema);
export default URL