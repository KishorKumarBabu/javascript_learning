
const API_URL="https://api.github.com/users/Kishor Kumar"
async function getdata(){
  try{
  const data=await fetch(API_URL)
  const jsonvalue=await data.json()
  console.log(jsonvalue)
  }
  catch(err){
    console.log(err)
  }
} 
getdata()
