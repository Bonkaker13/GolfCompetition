// Example data — update this array to change displayed results
//  const players = [
//   {
//     name: "Aaaron Couling",
//     scores: [38, 32, 37, 29, 29, 34, 33, 33],
//     birdies: [0, 1, 0, 2, 0, 1, 0, 3],
//     winningodds: "5 / 1",
//   },
//   {
//     name: "Andrew Hasted",
//     scores: [35, 30, 32, 38, 34, 36, 33, 30],
//     birdies: [3, 0, 1, 1, 0, 0, 2, 3],
//     winningodds: "6 / 1",
//   },
//   {
//     name: "Andy Keel",
//     scores: [30, 38, 35, 28, 34, 39, 36, 38],
//     birdies: [2, 1, 0, 0, 1, 0, 0, 1],
//     winningodds: "4 / 1",
//   },
//   {
//     name: "Andy Sexton",
//     scores: [30, 31, 32, 33, 34, 35, 36, 37],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "5 / 2",
//   },
//   {
//     name: "Barry Sharps",
//     scores: [30, 28, 35, 27, 34, 39, 26, 28],
//     birdies: [1, 2, 0, 3, 0, 0, 4, 2],
//     winningodds: "3 / 1",
//   },
//   {
//     name: "Bruce Markham",
//     scores: [30, 30, 30, 30, 30, 30, 30, 30],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "10 / 1",
//   },
//   {
//     name: "Dan Irish",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "8 / 1",
//   },
//   {
//     name: "Darren Reeks",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "12 / 1",
//   },
//   {
//     name: "Darren Smith",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "15 / 1",
//   },
//   {
//     name: "Dave Fellows",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "10 / 1",
//   },
//   {
//     name: "Dave Whitfieldl",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "9 / 1",
//   },
//   {
//     name: "Dean Bridges",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "11 / 1",
//   },
//   {
//     name: "Duncan Tilley",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "14 / 1",
//   },
//   {
//     name: "Fred Wyatt",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "20 / 1",
//   },
//   {
//     name: "Harvey Randall",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "25 / 1",
//   },
//   {
//     name: "Ian Pitchford",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "30 / 1",
//   },
//   {
//     name: "Ian Pratt",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "18 / 1",
//   },
//   {
//     name: "Jacob Hunter",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "22 / 1",
//   },
//   {
//     name: "Jane Southcombe",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "16 / 1",
//   },
//   {
//     name: "John Armour",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "13 / 1",
//   },
//   {
//     name: "John Baker",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "17 / 1",
//   },
//   {
//     name: "John Dawson",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "19 / 1",
//   },
//   {
//     name: "John Mallace",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "21 / 1",
//   },
//   {
//     name: "Jon Moore",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "23 / 1",
//   },
//   {
//     name: "Lee Fischer",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "24 / 1",
//   },
//   {
//     name: "Martin Campbell",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "28 / 1",
//   },
//   {
//     name: "Matt Hunt",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "26 / 1",
//   },
//   {
//     name: "Matt Long",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "27 / 1",
//   },
//   {
//     name: "Neil Duffy",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "29 / 1",
//   },
//   {
//     name: "Oli Chappell",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "35 / 1",
//   },
//   {
//     name: "Pat Michael",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "40 / 1",
//   },
//   {
//     name: "Sam Chapman",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "33 / 1",
//   },

//   {
//     name: "Simon Neil",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "38 / 1",
//   },
//   {
//     name: "Simon Wycherley",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "36 / 1",
//   },
//   {
//     name: "Steve Meakin",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "32 / 1",
//   },
//   {
//     name: "Wes Hacker",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "34 / 1",
//   },
//   {
//     name: "Will Walker",
//     scores: [80, 78, 75, 77, 74, 79, 76, 78],
//     birdies: [0, 0, 0, 0, 0, 0, 0, 0],
//     winningodds: "37 / 1",
//   },
// ];
import players from './playerlist.js';

// Store original order
const originalOrder = [...players];

// Helper: create grid cell
function cell(text, className = "") {
  const div = document.createElement("div");
  div.textContent = text;
  if (className) div.classList.add(className);
  return div;
}

// Calculate totals + best 6
function calculateStats(player) {
  const total = player.scores.reduce((a, b) => a + b, 0);
  const avg = (total / player.scores.length).toFixed(1);
  const totbirdies = player.birdies.reduce((a, b) => a + b, 0);
  const best6 = [...player.scores].sort((a, b) => b - a).slice(0, 6);
  const totalBest6 = best6.reduce((a, b) => a + b, 0);
  const avgBest6 = (totalBest6 / 6).toFixed(1);
  return { total, avg, totalBest6, avgBest6, best6, totbirdies };
}

// Render results grid
function renderGrid(playerList) {
  const grid = document.getElementById("resultsGrid");
  grid.classList.remove("hide-totals");
  grid.classList.add("hide-birdies");

  grid.innerHTML = ""; // clear grid

  const headers = [
    "Player",
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7",
    "R8",
    // "Birdies",
    "Avg",
    "Total",
  ];
  headers.forEach((h) => grid.appendChild(cell(h, "header")));

  playerList.forEach((player) => {
    const { totalBest6, avgBest6, best6, totbirdies } = calculateStats(player);
    grid.appendChild(cell(player.name));

    const cutoff = best6[5];
    const topScore = best6[0];

    player.scores.forEach((score) => {
      console.log("Score:", score, "Cutoff:", cutoff, "TopScore:", topScore);
      let className = "";
      if (score >= cutoff) className = "high-score";
      if (score === topScore) className = "best-score";
      grid.appendChild(cell(score, className));
    });

    // grid.appendChild(cell(totbirdies));
    grid.appendChild(cell(avgBest6, "best6"));
    grid.appendChild(cell(totalBest6, "best6"));
  });
}


function renderGrid1(playerList) {
  const grid = document.getElementById("resultsGrid");
  grid.classList.add("hide-totals");
  grid.classList.remove("hide-birdies");
  grid.innerHTML = ""; // clear grid

  const headers1 = [
    "Player",
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7",
    "R8",
    "Birdies",
  ];
  headers1.forEach((h) => grid.appendChild(cell(h, "header")));

  playerList.forEach((player) => {
    const { totalBest6, avgBest6, best6, totbirdies } = calculateStats(player);
    grid.appendChild(cell(player.name));

    // const cutoff = best6[5];
    // const topScore = best6[0];

    player.birdies.forEach((birdiescore) => {
      let className = "";
      // if (score >= cutoff) className = "high-score";
      // if (score === topScore) className = "best-score";
      grid.appendChild(cell(birdiescore, className));
    });

    grid.appendChild(cell(totbirdies));
    // grid.appendChild(cell(avgBest6, "best6"));
    // grid.appendChild(cell(totalBest6, "best6"));

  });
}

// --- Button Actions ---

// Sort by Birdies
const birdiecount = document.getElementById("sortBirdies");
const bestSix = document.getElementById("sortBest6");
birdiecount.addEventListener("click", birdieOrder);
function birdieOrder() {
  birdiecount.classList.add("clicked");
  bestSix.classList.remove("clicked");
  birdiecount.innerHTML = "Sorted by Birdies";
  bestSix.innerHTML = "Sort by Best 6";
  const sorted = [...players].sort((a, b) => {
    const aTot = a.birdies.reduce((sum, n) => sum + n, 0);
    const bTot = b.birdies.reduce((sum, n) => sum + n, 0);
    return bTot - aTot;
  });
  renderGrid1(sorted);
}

// Sort by Best 6
bestSix.addEventListener("click", bestSixOrder);
function bestSixOrder() {
  birdiecount.classList.remove("clicked");
  bestSix.classList.add("clicked");
  bestSix.innerHTML = "Sorted by Best 6";
  birdiecount.innerHTML = "Sort by Birdies";
  const sorted = [...players].sort((a, b) => {
    const aTotal = calculateStats(a).totalBest6;
    const bTotal = calculateStats(b).totalBest6;
    return bTotal - aTotal;
  });
  renderGrid(sorted);
}

// Initial render
// renderGrid(players);
bestSixOrder();

// function renderOddsGrid(playerList) {
//   console.log(playerList)
//   const grid = document.getElementById("oddsGrid");
//   console.log("Odds grid element:", grid);
//   grid.innerHTML = ""; // clear grid

//   // Header
//   grid.appendChild(cell("Player", "header"));
//   grid.appendChild(cell("Winning Odds", "header"));

//   // Loop through players
//   playerList.forEach((player) => {
//     grid.appendChild(cell(player.name));
//     grid.appendChild(cell(player.winningodds));
//   });
//   console.log("Odds grid rendered", grid);
// }
// renderOddsGrid(players);
