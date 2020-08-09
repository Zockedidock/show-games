
const gameContainer = (iconPath: string, name: string, version: string) => {
    const img = document.createElement("img")
    const gameName = document.createElement("a")
    const gameVersion = document.createElement("p")
    const root = document.getElementById("root")
    const gameDiv = document.createElement("DIV")

    root.appendChild(gameDiv)

    img.src = iconPath
    img.className = "gameIcon"
    gameName.innerHTML = name
    gameVersion.innerHTML = version
    
    gameDiv.className = "gameDiv"
    gameDiv.appendChild(img)
    gameDiv.appendChild(gameName)
    gameDiv.appendChild(gameVersion)
}

// just for testing
gameContainer(
    "https://raw.githubusercontent.com/mmtrt/leagueoflegends/master/snap/gui/leagueoflegends.png",
    "League of Legends",
    "v10.16"
)
// --

const addButton = document.getElementById("addButton")
const closeButton = document.getElementById("closeButton")
const addGameButton = document.getElementById("addGameButton")
const addParendDiv = document.getElementById("addParentDiv")

addParendDiv.style.display = "none"

addButton.onclick = () => {
    const inputPath = document.getElementById("inputPath") as HTMLInputElement
    const inputName = document.getElementById("inputName") as HTMLInputElement
    const inputVersion = document.getElementById("inputVersion") as HTMLInputElement
    gameContainer(
        inputPath.value,
        inputName.value,
        inputVersion.value
    )
}

closeButton.onclick = () => {
    addParendDiv.style.display = "none"
    addGameButton.style.display = "block"
}

addGameButton.onclick = () => {
    addParendDiv.style.display = "grid"
    addGameButton.style.display = "none"
}