const arr=[4,3,2,5,6,7,8]
function findsum(arr){
    let sum=0;
    for(let i=0 ; i< arr.length; i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(findsum(arr))