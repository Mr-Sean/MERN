const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    
    authorName:{
        type:String,
        required:[true, "Must have a name entered!"],
        minLength:[3, "Author name mush have at least 3 characters!"]
    }
  
}, {timestamps: true});

// ("Author Collection", Schema)
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;