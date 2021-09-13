const express = require("express");
const path = require("path");
const app = express();
const validate = require("./public/utils/logindatavalidate");


// console.log(validate.valLogin());

const port = process.env.PORT || 5000;
let a;

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/signin",(req,res) =>{
    
    a = req.body;
    console.log(a);
    var result = validate.valLogin(a);
    console.log(result);
    res.send(result);
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});


app.post("/signup",(req,res) =>{
    res.redirect("/");
    a = req.body;
    var result = validate.newsignup(a);
    console.log(result);
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});

app.listen(port);