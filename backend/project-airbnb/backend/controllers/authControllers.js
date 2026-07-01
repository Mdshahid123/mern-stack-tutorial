const  userClass= require("../model/userModel")
const genToken=require("../config/token")

async function signUp(req,res)
{

         try {
            //  step-01 getting a sigup data 
               const {email,name,password}=req.body
   
            // step02  validate the data
   
          
            // step-03 if every thing is okay then check user already exist or not 
            const existUser= await userClass.findOne({email})
            if(existUser)
            {
               return res.status(400).json({success:false,message:"user is already exist"})
            }
   
            // step-04 encrypt the password
           let hassPassword=await brcypt.hash(password,10)
   
            //step-5 store the sign up data in mongodb  but make sure password should be hashed
             const userObject=new userClass({
                name,
                email,
                password:hassPassword
             })
   
             const user=await userObject.save()
             console.log("successfuly saved a signup data in mongodb atlas:",user)
   
             let token=await genToken(user._id)
             res.cookie("token",token,{
                  httpOnly:true,
                  secure:process.env.node_environment="production",
                  sameSite:"strict",
                  maxAge:7*24*60*60*1000
             })
   
             return res.status(201).json({success:true,message:user})
            
         } catch (error) {
            console.log("internal server error",error)
             return res.status(500).json({success:false,error:error})
         }



}

module.exports=signUp