const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({

    role:{
        type:String,
        required:true
    },

    text:{
        type:String,
        required:true
    }

});

const conversationSchema=new mongoose.Schema({

    title:{
        type:String
    },

    messages:[messageSchema]

},{
    timestamps:true
});
module.exports= mongoose.model( "Conversation",conversationSchema);




