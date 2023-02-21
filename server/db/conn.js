import mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/url_shortener", {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log("mongoose connection successful"))
.catch(() => console.log("mongoose connection successful"))