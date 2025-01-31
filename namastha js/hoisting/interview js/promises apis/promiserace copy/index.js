const p1= new Promise((resolve,reject)=>{
  /* setTimeout(()=>resolve("p1 sucess"),3000) */
  setTimeout(()=>reject("p1 fails"),1000)
})
const p2= new Promise((resolve,reject)=>{
/*   setTimeout(()=>resolve("p2 sucess"),1000) */
  setTimeout(()=>reject("p2 fails"),1000)

})
const p3= new Promise((resolve,reject)=>{
 /*  setTimeout(()=>resolve("p3 sucess"),2000) */
  setTimeout(()=>reject("p3 fails"),1000)

})
Promise.any([p1,p2,p3]).then(res=>{
  console.log(res)
}).catch((err)=>{
  console.error(err)
  console.log(err.errors)
})