cart = ["show", "pants", "kurtha"];
const promise = creatorder(cart);
console.log(promise);
// this callback called when the resolve is performed
promise.then(function (orderId) {
  console.log(orderId);
  /*  proccedtopayment(orderid); */
})
.catch(function(err){
    console.log(err.message)
})
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
      },5000);
    }
  });
  return pr;
}
function validatecart(cart) {
  return false;
}
