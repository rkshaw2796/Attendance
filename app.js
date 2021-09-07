const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
let a;

app.use(express.static(path.join(__dirname,"public")));

app.get("/signin",(req,res) =>{
    res.redirect("/");
    a = req.query;
    console.log(a);
});


app.listen(port);