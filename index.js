const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const winObj = record.find( function(r) {
    return r['result'] === "W"
  });
  if(winObj) {
    return winObj['year'];
  }
}