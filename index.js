const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
  const found = record.find(game => game.result === "W");
  return found ? found.year : undefined;
}
