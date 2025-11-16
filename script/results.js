import players from "./playerlist.js";

// Store original order
const originalOrder = [...players];

// Helper: create grid cell
function cell(text, className = "") {
  const div = document.createElement("div");
  div.textContent = text;
  if (className) div.classList.add(className);
  return div;
}
// initial grid sort on page load
window.addEventListener("DOMContentLoaded", () => {
  bestSixAvgOrder();
});
// Calculate totals + best 6
function calculateStats(player) {
  // Filters out zero scores
  const validScores = player.scores.filter((score) => score > 0);
  // If no valid scores, return zeros
  if (validScores.length === 0) {
    return {
      total: 0,
      avg: 0,
      totalBest6: 0,
      avgBest6: "0.0",
      best6: [],
      totbirdies: 0,
    };
  }
  const scores = player.scores;
  const total = validScores.reduce((a, b) => a + b, 0);
  const avg = (total / validScores.length).toFixed(1);
  const totbirdies = player.birdies.reduce((a, b) => a + b, 0);
  let totalBest6, avgBest6, best6, highScore;

  if (validScores.length <= 6) {
    // If 6 or fewer valid scores, use all
    best6 = [...validScores];
    totalBest6 = total;
    avgBest6 = avg;
    highScore = Math.max(...validScores);
  } else {
    // More than 6 valid scores, pick best 6
    best6 = [...validScores].sort((a, b) => b - a).slice(0, 6);
    totalBest6 = best6.reduce((a, b) => a + b, 0);
    avgBest6 = (totalBest6 / 6).toFixed(1);
    highScore = Math.max(...validScores);
  }
  return { total, avg, totalBest6, avgBest6, best6, totbirdies, highScore };
}

// Render results grid
function renderScoresGrid(playerList) {
  const grid = document.getElementById("resultsGrid");
  grid.classList.remove("hide-totals");
  grid.classList.add("hide-birdies");
  grid.classList.remove("hide-highscore");
  grid.innerHTML = ""; // clear grid
  const headers = ["Player", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "Avg", "Total"];
  headers.forEach((h) => grid.appendChild(cell(h, "header")));

  playerList.forEach((player) => {
    const { totalBest6, avgBest6, best6, highScore } = calculateStats(player);
    console.log(totalBest6, avgBest6, best6, highScore);
    grid.appendChild(cell(player.name));

    const cutoff = best6[5];
    const topScore = best6[0];

    player.scores.forEach((score) => {
      let className = "";
      if (score === highScore) className = "top-Score";
      // if (score >= cutoff) className = "high-score";
      // if (score === topScore) className = "best-score";
      grid.appendChild(cell(score, className));
    });

    grid.appendChild(cell(avgBest6, "best6"));
    grid.appendChild(cell(totalBest6, "best6"));
  });
}

function renderBirdieGrid(playerList) {
  const grid = document.getElementById("resultsGrid");
  grid.classList.add("hide-totals");
  grid.classList.remove("hide-birdies");
  grid.classList.remove("hide-highscore");
  grid.innerHTML = ""; // clear grid

  const headers1 = ["Player", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "Birdies"];
  headers1.forEach((h) => grid.appendChild(cell(h, "header")));

  playerList.forEach((player) => {
    const { totbirdies } = calculateStats(player);
    grid.appendChild(cell(player.name));

    player.birdies.forEach((birdiescore) => {
      let className = "";
      grid.appendChild(cell(birdiescore, className));
    });

    grid.appendChild(cell(totbirdies));
  });
}

// Sort by Birdies
function birdieOrder() {
  const sorted = [...players].sort((a, b) => {
    const aTot = a.birdies.reduce((sum, n) => sum + n, 0);
    const bTot = b.birdies.reduce((sum, n) => sum + n, 0);
    return bTot - aTot;
  });
  renderBirdieGrid(sorted);
}

// Sort by Best 6
function bestSixAvgOrder() {
  const sorted = [...players].sort((a, b) => {
    const aAvg = calculateStats(a).avgBest6;
    const bAvg = calculateStats(b).avgBest6;
    return bAvg - aAvg;
  });

  renderScoresGrid(sorted);
}
function bestSixTotOrder() {
  const sorted = [...players].sort((a, b) => {
    const aTotal = calculateStats(a).totalBest6;
    const bTotal = calculateStats(b).totalBest6;
    return bTotal - aTotal;
  });
  renderScoresGrid(sorted);
}

// Sort by High Score
function highScoreOrder() {
  const sorted = [...players].sort((a, b) => {
    const aHigh = Math.max(...a.scores);
    const bHigh = Math.max(...b.scores);
    return bHigh - aHigh;
  });
  renderHighScoreGrid(sorted);
}

function renderHighScoreGrid(playerList) {
  const grid = document.getElementById("resultsGrid");
  grid.classList.remove("hide-totals");
  grid.classList.remove("hide-birdies");
  grid.classList.add("hide-highscore");
  grid.innerHTML = ""; // clear grid

  // Headers
  grid.appendChild(cell("Player", "header"));
  grid.appendChild(cell("Highest Score", "header"));

  // Data rows
  playerList.forEach((player) => {
    const highest = Math.max(...player.scores);
    grid.appendChild(cell(player.name));
    grid.appendChild(cell(highest));
  });
}

const sortSelect = document.getElementById("sortSelect");
sortSelect.addEventListener("change", (e) => {
  const sortType = e.target.value;
  switch (sortType) {
    case "score":
      bestSixTotOrder();
      break;
    case "birdies":
      birdieOrder();
      break;
    case "bestScore":
      highScoreOrder();
      break;
    case "averageBest6":
      bestSixAvgOrder();
      break;
    default:
      // Default action
      bestSixAvgOrder();
  }
});
