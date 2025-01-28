cart = ["show", "pants", "kurtha"];
creatorder(cart)
  // this callback called when the resolve is performed
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proccedtopayment(orderId);
  })
  .then(function ({message, amt}) {
    console.log(message, `amount`, amt);
    return showordersummary({message,amt});
  })
  .then(function ({message,amt}) {
    console.log(message,amt);
  })
  .then(function (summaryInfo) {
    return updateWallet(summaryInfo);
  })
  .then(function (updateinfo) {
    console.log(updateinfo);
  })
  .catch(function (error) {
    console.error(error); // Failure case
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("no matter what happen,i will definietely called!!!");
  });
function creatorder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //creatored
    //validation of cart
    //order ID
    if (!validatecart(cart)) {
      const err = new Error("cart is not valied");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function proccedtopayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve({ message: `payment secussfull for orderid:${orderId}`, amt: 500 });
  });
}
function showordersummary({message,amt}) {
  return new Promise(function (resolve, reject) {
    resolve({message:`${message} item price is `,amt});
  });
}
function updateWallet(orderId) {
  return new Promise(function (resolve, reject) {
  if (sumaryvalitation())
{
    resolve("The wallet has been updated");
}
if(!sumaryvalitation()) {
  reject("failed to update the wallet")
}
  });
}
function validatecart(cart) {
  return true;
}
function sumaryvalitation(){
  return true
}