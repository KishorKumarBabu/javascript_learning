"use strict";
//this in global space
console.log(this);
//this inside a function
function x() {
  console.log(this);
}

//this inside non strictmode
// if this keyword valu is undefine or null
//this key word will replace the globle object
//only in non strict mode

// this keyword value depend on how this is called (window)

x();
window.x()

//this inside a object's methods

const obj ={
  a:10,
  x:function (){
    console.log(this.a)
  }
}
/* obj.x() */

// call apply bind method (sharing methods)

const student={
  name:"kishor",
  printname:function(hometown,state){
    console.log(this.name+"hometown"+hometown+","+state)
  }
}
student.printname("tirupathur")
const student2={
  name:"kumar"
}
student.printname.call(student2,"tiruprthur") // here the value of this is student2
student.printname.apply(student2,["mubai","mharastra"])
// bind method
let printmyname = student.printname.bind(student2,["mubai","mharastra"])
console.log(printmyname)
printmyname()

// this keyword inside the arrow function

const obje={
  a:10,
  x:()=> {
    console.log(this)
}
}
obje.x()
// this keyword nested inside the function 
const obje2={
  a:10,
  x:function(){
   const y=  ()=> {
    console.log(this)
}
y()}
}
obje2.x()
