import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "./db/conn.js"
import URL from "./models/urls.js"
import urlRouter from "./routes/url.js"
const index = express()
const port = process.env.PORT || 8000
index.use(express.json());
index.use(express.urlencoded({extended: false}));
index.use(cors());
index.use(urlRouter)

index.get("/", (req, res) => {
    res.status(200).send("hello")
})
index.listen(port, () => {
    console.log(`server running at ${port}`)
})