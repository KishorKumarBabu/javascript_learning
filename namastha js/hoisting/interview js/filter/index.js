arr=[2,3,4,5,6,7]
function isodd(x){
  return x%2
}
const output = arr.filter(isodd)
console.log(output)


arr=[2,3,4,5,6,7]
function isodd(x){
  return x%2===0
}
const output1 = arr.filter(isodd)
console.log(output1)
