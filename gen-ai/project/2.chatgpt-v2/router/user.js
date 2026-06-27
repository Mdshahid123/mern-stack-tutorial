const express=require("express")

const userRoutes=express.Router()

const { showHomePage, callToLlm,getAllConversations, getConversation} = require("../controllers/user");

// =========================
// home page  Endpoint
// =========================
userRoutes.get("/", showHomePage)




// =========================
// Chat Endpoint
// =========================

userRoutes.post("/llm", callToLlm)


userRoutes.get(
    "/conversations",
    getAllConversations
);

userRoutes.get(
    "/conversations/:id",
    getConversation
);



module.exports=userRoutes

