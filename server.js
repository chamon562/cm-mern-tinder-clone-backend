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
// copy and past connection url in a variable
const connection_url = 'mongodb+srv://admin:RnwrJHKUfNmKoBt2@cluster0.dkfhd.mongodb.net/cm-tinderdb?retryWrites=true&w=majority'

// Middlewares

// DB config this is where we connect to our database
// pass in perameters to our connections
// these our paremeters to help smoothen out connection
// because mongoose is under development and can stand evolving 
// thats why this is needed to be added 
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API endpoints
// "/" will be the root, followed by the callback function
app.get("/", (req, res) => {
    res.status(200).send("Hello Dev")
})
// Listner
app.listen(port, () => console.log(`listening on localhost: ${port}`))