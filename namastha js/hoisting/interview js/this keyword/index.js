"use strict"
//this in global space
console.log(this)
//this inside a function
function x(){
  console.log(this)
}
x()
//this inside non strictmode 
// if this keyword valu is undefine or null 
//this key word will replace the globle object
//only in non strict mode