function renderOddsGrid(playerList) {
  console.log(playerList)
  const grid = document.getElementById("oddsGrid");
  console.log("Odds grid element:", grid);
  grid.innerHTML = ""; // clear grid

  // Header
  grid.appendChild(cell("Player", "header"));
  grid.appendChild(cell("Winning Odds", "header"));

  // Loop through players
  playerList.forEach((player) => {
    grid.appendChild(cell(player.name));
    grid.appendChild(cell(player.winningodds));
  });
  console.log("Odds grid rendered", grid);
}
function sortPlayersByOdds() {
  const sorted = [...players].sort((a, b) => {
    const aOdds = oddsToNumber(a.winningodds);
    const bOdds = oddsToNumber(b.winningodds);
    return aOdds - bOdds; // ascending odds (favourites first)
  });  
renderOddsGrid(sorted);
}

sortPlayersByOdds();
function cell(text, className = "") {
  const div = document.createElement("div");
  div.textContent = text;
  if (className) div.classList.add(className);
  return div;
}

function oddsToNumber(oddsStr) {
  if (!oddsStr || typeof oddsStr !== "string") return 0;
  const [num, den] = oddsStr.split("/").map(Number);
  if (isNaN(num) || isNaN(den) || den === 0) return 0;
  return num / den;
}

import players from "./playerlist.js";