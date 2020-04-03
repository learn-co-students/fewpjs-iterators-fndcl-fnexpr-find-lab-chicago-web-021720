const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  let gameWin = record.find(game => game.result === "W")
  if (gameWin) {
    return gameWin.year
  } else {
    return gameWin
  }
}