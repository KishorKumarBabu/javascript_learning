function eventnam(){
let count=0
document.getElementById("me").addEventListener("click",function(){
    console.log("buttonclicked",++count)
})}
eventnam()
