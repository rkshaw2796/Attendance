const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017";
const database = "attendance";

MongoClient.connect(url,{ useNewUrlParser : true },(error,client) =>{
    if(error){
        return console.log("Unable to connect to database attendance");
    }

    console.log("Connection established !!");
});