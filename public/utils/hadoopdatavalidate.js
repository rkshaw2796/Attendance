const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017";
const database = "attendance";

var validate = {
newsignup : function (a){

    MongoClient.connect(url,{ useNewUrlParser : true },(error,client) =>{
        if(error){
            return console.log("Unable to connect to database attendance");
        }

        console.log("Connection established !!");

        const db = client.db(database);
        db.collection("users").insertOne(a);
        // return "Inserted Successfully !!";
    });

},

valLogin : function(a,res){

    let result = false;
    MongoClient.connect(url, {useNewUrlParser : true}, (error,client) =>{
        if(error){
            return console.log("Unable to Connect database Attendance");
        }

        console.log("Connection Establised !!");

        const db = client.db(database);

        db.collection("users").findOne({email: a.email}, (error,user)=>{
            console.log(user.password + " " +a.password);
        if(user.password === a.password)
        {
            console.log(user.password + " " +a.password);
            result = true;
            res.send("Logged In!!");
        }
        });
    });
}

};
module.exports = validate;