// import players from "./playerlist.js";
import players from "./playerlist.js";

// Function to create a cell
function cell(text, className = "") {
  const div = document.createElement("div");
  div.textContent = text;
  if (className) div.classList.add(className);
  return div;
}

// Main render function
function renderOddsGrid(playerList) {
  const container = document.querySelector(".odds-container");
  container.innerHTML = ""; // clear old grid

  // Create wrapper for header + body
  const gridWrapper = document.createElement("div");
  gridWrapper.classList.add("odds-grid-wrapper");

  // Create header row
  const header = document.createElement("div");
  header.classList.add("odds-grid-header");
  header.appendChild(cell("Player"));
  header.appendChild(cell("Winning Odds"));

  // Create scrollable body
  const body = document.createElement("div");
  body.classList.add("odds-grid-body");

  // Populate player rows
  playerList.forEach((player) => {
    body.appendChild(cell(player.name));
    body.appendChild(cell(player.winningodds));
    console.log("Added player to odds grid:", player.name);
  });

  // Combine and append
  gridWrapper.appendChild(header);
  gridWrapper.appendChild(body);
  container.appendChild(gridWrapper);
}

// Convert odds like "2/1" to number for sorting
function oddsToNumber(oddsStr) {
  if (!oddsStr || typeof oddsStr !== "string") return 0;
  const [num, den] = oddsStr.split("/").map(Number);
  if (isNaN(num) || isNaN(den) || den === 0) return 0;
  return num / den;
}

// Sort players by odds (lowest = favorite first)
function sortPlayersByOdds() {
  const sorted = [...players].sort((a, b) => {
    const aOdds = oddsToNumber(a.winningodds);
    const bOdds = oddsToNumber(b.winningodds);
    return aOdds - bOdds;
  });
  renderOddsGrid(sorted);
}

sortPlayersByOdds();
