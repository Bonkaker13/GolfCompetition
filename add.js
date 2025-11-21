import players from "./playerlist.js";

let selectTag=document.getElementById("playerSelect")
players.map( (lang, i) => {
    let opt = document.createElement("option");
    opt.setAttribute("name",players[i].name)
    opt.appendChild(document.createTextNode(players[i].name))
    selectTag.append(opt);
});