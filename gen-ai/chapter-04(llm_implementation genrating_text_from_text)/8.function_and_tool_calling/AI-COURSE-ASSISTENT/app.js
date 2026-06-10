
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

app.use(express.static( path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile( path.join( __dirname, "public", "index.html" ));
});


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(3000, () => {
        console.log(
            "Server running on port 3000"
        );
    });
})
.catch((err) => {
    console.log(err);
});

