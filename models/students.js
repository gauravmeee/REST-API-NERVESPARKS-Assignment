const mongoose = require("mongoose");
const validator = require("validator");

//Schema------------------------------------------
const studentSchema =  new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlenght :3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){ //value -> value of the object  i.e here email
            if(!validator.isEmail(value)) 
                throw new Error ("Invalid Email")
        }
    },
    phone:{
        type:Number,
        minLength:10,
        maxLength:20,
        required:true,
        unique: true
    },

    address:{
        type:String,
        required:true
    }

})

//Models ---------------------------------------------------
//we will create a new collection (collection -> database)
const Student = new mongoose.model('Student', studentSchema);  //creates a Mongoose model named Student based on a schema (studentSchema).

//**Important : - 'Student': This is the singular name of the collection that the model is for. 
//Mongoose will automatically create or reference a MongoDB collection named 'students' (lowercase and pluralized) based on this name. 
//So, Student model will interact with the 'students' collection in the MongoDB database.

module.exports = Student;