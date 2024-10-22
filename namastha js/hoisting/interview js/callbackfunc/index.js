setTimeout(function() {
    console.log("triner");
})
function x(y){
    console.log("x")
    y()
}
x(function (){
    console.log("y")
})