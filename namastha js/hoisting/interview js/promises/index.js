cart=["show","pants","kurtha"]
const promise=creatorder(cart)
promise.then(function(orderid)
{
    proccedtopayment(orderid)
})