const jwt=require("jsonwebtoken") 
function genToken(userId)
{

         try {

           let token=jwt.sign({userId},process.env.jwt_secret,{expiresIn:"7d"})
           return token
          }catch(error) {
                console.log("error while generating a token",error) 
          }



 }

 module.exports=genToken