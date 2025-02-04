
const p=new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve("promise resolved value!!")
},1000)
})
// using await function 
async function promise(){
  const val=await p
console.log("kishor")
console.log(val)
const val2=await p
console.log("kishor")
console.log(val2)

}
promise()
/* function getdata(){
  p.then((res)=>console.log(res))
  console.log("kishor kumar")
}
getdata() */
