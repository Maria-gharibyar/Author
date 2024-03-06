const mongoose=require('mongoose');


const authorSchema=new mongoose.Schema({
    firstname: { 
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 6 characters long"]
      },
},{ timestamps: true })

const author=mongoose.model('author',authorSchema);
module.exports=author