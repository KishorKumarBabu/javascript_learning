function a(){
    console.log("class")
}
var b=function (param){
    return function(){

    }
}
a()
console.log(b())
