const express = require("express");
const path = require("path");
const app = express();
const validate = require("./public/utils/logindatavalidate");


// console.log(validate.valLogin());

const port = process.env.PORT || 5000;
let a;

app.use(express.static(path.join(__dirname,"public")));

app.get("/signin",(req,res) =>{
    
    a = req.query;
    var result = validate.valLogin(a);
    console.log(result);
    res.send(result);
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});


app.get("/signup",(req,res) =>{
    res.redirect("/");
    a = req.query;
    var result = validate.newsignup(a);
    console.log(result);
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});

app.listen(port);