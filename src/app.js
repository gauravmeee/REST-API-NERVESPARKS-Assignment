//This is the Express Application
const express = require("express");

//Current Directory (.): Parent Directory (..):
//no require of .js extension
require("../db/conn")  // The behavior of require() in this case typically involves executing the code within the conn.js file (or whatever module is located at "../db/conn"), but it does not return a value explicitly assigned to a variable. Instead, it might define or execute certain configurations or establish connections (like connecting to a database in this case) that are needed globally in your application.
const Student = require("../models/students"); //When you import it this way, you are explicitly assigning the exported value (in this case, the Mongoose model) to a variable (Student) that you can then use in your code to interact with the MongoDB collection.

const app = express(); //app got the functions of express
const port = process.env.PORT || 3000; // port = HostServer || LocalServer
app.use(express.json());

    

// app.get("/", (req,res) => {
//     res.send("hello from this sides by Gaurav Meena"); //server give this response
// })

// create a new students
app.post("/students", (req,res) => {
    console.log("Request received at /students"); // Debugging statement
    console.log(req.body); 

    
    const user = new Student(req.body); //SAnything int HTTP request, post will be add into this collection(Student) captialise+singular database name
    //You DO NOT NEED express.json() and express.urlencoded() for GET Request or Delete Requests.
//We only need it for post and put request.

//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
//This method is called as a middleware
// in your applicaion using the code: app.use(express.json());

    /*{
        "name": "Gaurav Meena",
        "email": "gaurav28.official@gmail.com",
        "phone": 7836977520,
        "address": "New Delhi"
    }*/
        //It is a promise

        
        user.save().then(()=>{ //save to database 

            //http response 200:ok, 201:created, 400:bad request 
            res.status(201).send(user); //in place of res.send(user);
        }).catch((e)=>{ //catch error
            res.status(400).send(e); //send error
        })

    //res.send("hello from this sides"); //server give this response
})
  
app.listen(port , ()=>{
    console.log(`Connection is setup at ${port}`); //n JavaScript, you need to use backticks (`) instead of double quotes (") for string interpolation. i.e to use value of ${port}
})


