// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record){
  let result = record.find(function(s) {return (s["result"] === "W")})
  if (result) {
    result = result["year"]
  }
  return result
  
  
}
