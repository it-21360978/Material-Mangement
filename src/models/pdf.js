const mongoose = require('mongoose');

// Define pdf  schema
const pdfSchema = new mongoose.Schema({


    title:{
        type:String,
        required:true,
    },

    description:{ 
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },

    
    grade:{
        type:String,
        required:true
    },
    
    subject:{
        type:String,
        required:true
    },

    teacher:{
        type: String,
        required:true
      },

    file:{
        type:String,
        required:true
    },
},

{timestamps: true}
);


// Export pdf schema
module.exports = mongoose.model('pdf_note', pdfSchema);