

//incase of return promises
const p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve("promise resolved value!!")
},10000)
})
const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve("promise resolved value!!")
},20000)
})

//async and await
async function getdata(){
  console.log("hello")
  const val= await p1
  console.log("kishor")
  console.log(val)

  const val2= await p2
  console.log("kumar")
  console.log(val2)

} 
getdata()
