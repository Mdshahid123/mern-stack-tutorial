function create_greet(name,callback)
{
    let greet_msg=`hello ${name}`
    callback(greet_msg)
    
}
create_greet("md shahid",(msg)=>{
     console.log(msg)
})


