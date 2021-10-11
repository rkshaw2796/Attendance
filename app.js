const express = require("express");
const path = require("path");
const app = express();
const validate = require("./public/utils/logindatavalidate");
const mongovalidate = require("./public/utils/hadoopdatavalidate");


// console.log(validate.valLogin());

const port = process.env.PORT || 5000;
let a;

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
res.render("index");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signin",(req,res) =>{
    
    a = req.body;
    // console.log(a);
    mongovalidate.valLogin(a,res);
    // console.log(result);
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});


app.post("/signup",(req,res) =>{
    res.redirect("/");
    a = req.body;
    mongovalidate.newsignup(a);
    // console.log(result);
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});

app.listen(port);