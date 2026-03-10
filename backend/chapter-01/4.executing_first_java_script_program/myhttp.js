function mycreateserver(callback)
{
     //logic for creating a server
     const request={
        method:"get",
        url:"/product",
        headers:"headers"
      }


      const response={
        write:()=>{

        },

        headers:()=>{

        },
        end:()=>{

        }


      }

      callback(request,response)


}


module.exports={
  mycreateserver
}