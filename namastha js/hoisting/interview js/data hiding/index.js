function counter(){
var count=0
this.incrementcounter=function(){
    count++
    console.log(count)
}
this.decrementcounter=function(){
    count--
    console.log(count)
}
}
var counte1=new counter()
counte1.incrementcounter()
counte1.decrementcounter()
