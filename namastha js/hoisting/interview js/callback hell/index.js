const cart=["show","pants","kurta"]
api.creatorder (cart,function(){
  api.proceedtopay(function(){
    api.showordersummary(function(){
      api.updatewallet()
    })
  }
)
}
)