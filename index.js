const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
    const winner = array.find( function(season) { return season.result == "W" } );
    return (winner ? winner.year : undefined);
}