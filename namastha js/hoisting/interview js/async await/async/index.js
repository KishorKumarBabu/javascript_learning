/* async function getdata(){
  return "namaste"
}
const datapromise = getdata()
console.log(datapromise)
datapromise.then((res)=>console.log(res)) */


//incase of return promises
const p=new Promise((resolve,reject)=>{
  resolve("promise resolved value!!")
})
async function getdata(){
  return p
}
const datapromise = getdata()
console.log(datapromise)
datapromise.then((res)=>console.log(res))