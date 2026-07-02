const registerSignupClass=require("../model/signupRegisterModel")

async function submitSignupForm(req, res){
                // step 1:get the signup data from the request body
                const { name, email, password ,confirmPassword} = req.body //destructuring the data from the request body

              // step 2: validate the data

              // 1) basic validation: check if all fields are filled

              if(!name || !email  || !password || !confirmPassword){
                        return res.status(400).json({success:false, message:"All fields are required"})
              }

              // 2) emai validation: check if the email is valid using regex
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if(!emailRegex.test(email)){
                        return res.status(400).json({success:false, message:"Invalid email address expected format: user@domain.com"})
              }
                
              // 3) password validation: check if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character
              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if(!passwordRegex.test(password)){
                        return res.status(400).json({success:false, message:"Invalid password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"})
              }

              // 4) confirm password validation: check if the password and confirm password match
              if(password !== confirmPassword){
                        return res.status(400).json({success:false, message:"Passwords do not match"})
              }

              // step 3: save the data to the database

              const newUser=new registerSignupClass({
                        name:name,
                        email:email,
                        password:password
              })

              try {
                     await newUser.save()
                     console.log('succsessfully saved signup data')
                     res.status(200).json({success:true, message:"Signup successful"})
                     
              } catch (error) {
                     console.error('Error saving signup data:', error)
                     res.status(500).json({success:false, message:"Internal server error"})
              }





}


module.exports=submitSignupForm