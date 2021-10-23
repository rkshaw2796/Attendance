const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://rahul:rahul@cluster0.3u439.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const database = "attendance";

var validate = {
newsignup : function(a,res){

    MongoClient.connect(url,{ useNewUrlParser : true },(error,client) =>{
        if(error){
            return console.log("Unable to connect to database attendance");
        }

        console.log("Connection established !!");

        const db = client.db(database);
        console.log(a.email);
        db.collection("users").findOne({email: a.email}, (error,user) => {
            if(!user)
            {
                db.collection("users").insertOne(a);
                res.render("signup",{"errormsg":"Successfully Registered"});
                return;
            }
            else{
                res.render("signup",{"errormsg":"User already exist."});
                return;
            }
        });

        
        // return "Inserted Successfully !!";
    });

},

valLogin : function(a,res){

    let result = false;
    MongoClient.connect(url, {useNewUrlParser : true, useUnifiedTopology: true}, (error,client) =>{
        if(error){
            return console.log("Unable to Connect database Attendance");
        }

        console.log("Connection Establised !!");

        const db = client.db(database);

        db.collection("users").findOne({email: a.email}, (error,user)=>{
            
        if(!user)
        {
            res.render("", {"errormsg":"Email not Found. Please Register"});
            console.log("User not Found.");
            return;
        }
        console.log(user);
        if(user.password === a.password)
        {
            console.log(user.password + " " +a.password);
            result = true;
            res.send("Logged In!!");
        }
        else{
            res.render("", {"errormsg":"Wrong Password"});
            console.log("Wrong Password");
            return;
        }
        });
    });
}

};
module.exports = validate;