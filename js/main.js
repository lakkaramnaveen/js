function firstFunction(parameters, callback) {
  // do something
  callback();
}

// callback hell
firstFunction(para, function(){
    secondFunction(para, function(){
        thirdFunctino(para, function(){

        })
    })
})
