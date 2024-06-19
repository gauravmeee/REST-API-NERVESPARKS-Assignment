const mongoose = require("mongoose");

//establish a connection between a Node.js application and a MongoDB database using Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js. Here's a detailed explanation with comments added:
mongoose.connect("mongodb://localhost:27017/students-api",{ // students-api: The name of the database to connect to. If the database does not exist, MongoDB will create it upon receiving the first write operation.

//The useCreateIndex option has been deprecated for a while and removed as of the Mongoose 6 release per No More Deprecation Warning Options 1.4k:
//useNewUrlParser , useUnifiedTopology , useFindAndModify , and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .
//useCreateIndex: true,
//useNewUrlParser: true,
//useUnifiedTopology: true,

//this function return a promise
}).then(()=>{
    console.log("connection is successful");
}).catch((error)=>{
    console.error("Error connecting to MongoDB:", error.message);
    //catch((e)=>{ console.log("No connection");}
    //or
    //catch((e)=>{ res.send(e); }
})
