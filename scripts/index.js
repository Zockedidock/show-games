var gameContainer = function (iconPath, name, version) {
    var img = document.createElement("img");
    var gameName = document.createElement("a");
    var gameVersion = document.createElement("p");
    var root = document.getElementById("root");
    var gameDiv = document.createElement("DIV");
    root.appendChild(gameDiv);
    img.src = iconPath;
    img.className = "gameIcon";
    gameName.innerHTML = name;
    gameVersion.innerHTML = version;
    gameDiv.className = "gameDiv";
    gameDiv.appendChild(img);
    gameDiv.appendChild(gameName);
    gameDiv.appendChild(gameVersion);
};
// just for testing
gameContainer("https://raw.githubusercontent.com/mmtrt/leagueoflegends/master/snap/gui/leagueoflegends.png", "League of Legends", "v10.16");
// --
var addButton = document.getElementById("addButton");
var closeButton = document.getElementById("closeButton");
var addGameButton = document.getElementById("addGameButton");
var addParendDiv = document.getElementById("addParentDiv");
addParendDiv.style.display = "none";
addButton.onclick = function () {
    var inputPath = document.getElementById("inputPath");
    var inputName = document.getElementById("inputName");
    var inputVersion = document.getElementById("inputVersion");
    gameContainer(inputPath.value, inputName.value, inputVersion.value);
};
closeButton.onclick = function () {
    addParendDiv.style.display = "none";
    addGameButton.style.display = "block";
};
addGameButton.onclick = function () {
    addParendDiv.style.display = "grid";
    addGameButton.style.display = "none";
};
