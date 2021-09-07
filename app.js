const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const JSONBuffer = fs.readFileSync("./public/data/logindata.json");
// console.log(JSON.parse(JSONBuffer.toString()).user[1].name);
var loginlist = JSON.parse(JSONBuffer.toString()).user;
// console.log(loginlist.length);




const port = 5000;
let a;

app.use(express.static(path.join(__dirname,"public")));

app.get("/signin",(req,res) =>{
    // res.redirect("/");
    a = req.query;
    console.log(a);
    let check = false;

    for(i =0; i < loginlist.length; i++){
        if(a.username == loginlist[i].name && a.password == loginlist[i].password)
        check = true;
    }
    if(check){
        res.send("<h1>Success!</h1>");
    }
    else{
        res.send("<h1>Failed</h1>");
    }
    // let b = JSON.stringify(a);
    // console.log(b);
    // console.log(JSON.parse(b));
    
});


app.listen(port);