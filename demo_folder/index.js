// defined

function fdfs(data,callback)
{    console.log(`fetching ${data}.....`)
      setTimeout(()=>{
          let response=data
          callback(response)
      },4000)
      
}




fdfs("data1",(result)=>{
      console.log(result)
      fdfs("data2",(result)=>{
         console.log(result)
         fdfs("data3",(result)=>{
             console.log(result)
         })
      })


})