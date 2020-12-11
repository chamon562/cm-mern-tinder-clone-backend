// this will all the logic will go for our backend
// install dependicies
// reminder able to use import because we added in the package.json
// "type": "module" & "scripts": { "start": "node server.js"}
import express from "express";
import mongoose from "mongoose";

// line up how application will look

// App Config
// *** create an instance ***
const app = express();
// define a port using environmental varaiable 
const port = process.env.PORT || 8000

// Middlewares

// DB config

// API endpoints
// "/" will be the root, followed by the callback function
app.get("/", (req, res)=>{
    res.status(200).send("Hello Dev")
})
// Listner
app.listen(port, () => console.log(`listening on localhost: ${port}`))