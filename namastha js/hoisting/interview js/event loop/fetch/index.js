console.log("start")
setTimeout(function cbt(){
    console.log("callb time")
},5000)
fetch("https://www.netflix.com/in/").then(function cbf() {
    console.log("cb netflix")
})
console.log("end")