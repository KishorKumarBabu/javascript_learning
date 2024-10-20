function a(){
    var x=0,z=2
    return function b(){
        console.log(x)
    }
}
var y=a()
y()