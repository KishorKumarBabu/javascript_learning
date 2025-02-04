

//incase of return promises
const p=new Promise((resolve,reject)=>{
  resolve("promise resolved value!!")
})
//async and await
async function getdata(){
  const val= await p
  console.log(val)
} 
getdata()
 //normal function
 /* function getdata()
{
  p.then((res)=> console.log(res))
}
getdata() */