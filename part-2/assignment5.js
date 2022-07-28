function delayedResult(n1,n2,delayTime,callback){
  setTimeout(()=>{
    callback(n1+n2)
  },delayTime)
}
delayedResult(4,5,3000,function(result) {
  console.log("Assignment5: ",result)
})
