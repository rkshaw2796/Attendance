const fs = require("fs");

const JSONBuffer = fs.readFileSync("./public/data/logindata.json");
// console.log(JSON.parse(JSONBuffer.toString()).user[1].name);
var loginlist = JSON.parse(JSONBuffer.toString()).user;
// loginlist.push({name : "Rani shaw", email: "ranishaw@gmail.com", mobile : "1234567890", password: "Rani@1998"});
// console.log(loginlist);

var validate = {
valLogin : function(a){
    // console.log("LoginDataValidate");
    let check = false;

    for(i =0; i < loginlist.length; i++){
        if(a.username == loginlist[i].name && a.password == loginlist[i].password)
        check = true;
    }
    if(check){
        return "Success";
    }
    else{
        return "Failed";
    }
},

newsignup : function(a){
    loginlist.push({name : a.username, email: a.email, mobile : a.mobile, password: a.password});
    let result = {"user" : loginlist}
    let resultJSON = JSON.stringify(result);
    fs.writeFileSync("./public/data/logindata.json",resultJSON);
}
}
module.exports = validate;