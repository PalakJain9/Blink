import mongoose from "mongoose"
const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
        unique: [true, "url already present"],
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("enter correct URL");
            }
        }
    },
    code6char: {
        type: String,
        required: true,
        unique: [true, "url already present"]
    }
});

const URL = new mongoose.model("URL", urlSchema);
export default URL