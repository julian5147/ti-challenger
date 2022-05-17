//TODO
function counts(teamA, teamB) {
  return teamB.map((b) => teamA.reduce((acc, cur) => acc + (b >= cur && 1), 0));
}

(function main() {
  let teamA = [2, 10, 5, 4, 8];
  let teamB = [3, 1, 7, 8];
  let result = counts(teamA, teamB);
  console.log(result);
})();
