cart = ["show", "pants", "kurtha"];
creatorder(cart)
  .then(function (orderid) {
    return proccedtopayment(orderid);
  })
  .then(function (paymentInfo) {
    return Showordersymmary(paymentInfo);
  });
