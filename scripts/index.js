const $root = $("#root"),
      $addButton = $("#addButton"),
      closeButton = document.getElementById("closeButton"),
      addGameButton = document.getElementById("addGameButton"),
      addParendDiv = document.getElementById("addParentDiv"),
      functionParent = document.getElementById("functionParent"),
      closeFunctionB = document.getElementById("closeFunctionButton"),
      functionInput = document.getElementById("functionInput"),
      addGameButtonParent = document.getElementById("addGameButtonParent"),
      loadGamesButton = document.getElementById("loadGamesButton")

if (
    localStorage.LSpath === undefined &&
    localStorage.LSlink === undefined &&
    localStorage.LSname === undefined &&
    localStorage.LSversion === undefined 
) {
    alert("LocalStorage Items not set! Click the Load Button to Load to load the Games before adding new Games.")
} else {
    var tempPath = JSON.parse(localStorage.LSpath)
    var tempLink = JSON.parse(localStorage.LSlink)
    var tempName = JSON.parse(localStorage.LSname)
    var tempVersion = JSON.parse(localStorage.LSversion)
}


functionParent.style.display = "none"

gameContainer = (iconPath, link, name, version) => {
    const img = document.createElement("img"),
          gameName = document.createElement("a"),
          gameVersion = document.createElement("p"),
          gameDiv = document.createElement("DIV"),
          closeB = document.createElement("button"),
          functionB = document.createElement("button")

    $root.append(gameDiv)

    img.src = iconPath
    img.className = "gameIcon"
    img.alt = name
    gameName.innerHTML = name
    gameName.href = link
    gameVersion.innerHTML = version

    closeB.innerHTML = "X"
    closeB.className = "btn cB"

    functionB.innerHTML = "()"
    functionB.className = "btn fB"
    functionB.setAttribute("data-toggle", "modal")
    functionB.setAttribute("data-target", "#functionModal")
    
    gameDiv.className = "gameDiv"
    gameDiv.appendChild(img)
    gameDiv.appendChild(gameName)
    gameDiv.appendChild(gameVersion)
    gameDiv.appendChild(closeB)
    gameDiv.appendChild(functionB)
    closeB.onclick = () => {
        let r = confirm("Are you sure?");
        if (r == true) {
            gameDiv.remove()

            tempPath = tempPath.filter(e => e !== link)
            tempLink = tempLink.filter(e => e !== iconPath)
            tempName = tempName.filter(e => e !== name)
            tempVersion = tempVersion.filter(e => e !== version)
            
            localStorage.setItem("LSlink", JSON.stringify(tempLink))
            localStorage.setItem("LSpath", JSON.stringify(tempPath))
            localStorage.setItem("LSname", JSON.stringify(tempName))
            localStorage.setItem("LSversion", JSON.stringify(tempVersion))
        }  
    }
    functionB.onclick = () => {
        functionInput.value = `gameContainer(\n    \"${iconPath}\",\n    \"${link}\",\n    \"${name}\",\n    \"${version}\"\n)`
    }
}

addParendDiv.style.display = "none"

const $inputPath = $("input#inputPath") 
const $inputLink = $("input#inputLink") 
const $inputName = $("input#inputName") 
const $inputVersion = $("input#inputVersion")

$addButton.click(() => {
    if (($inputPath.val() === "") || 
        ($inputLink.val() === "") || 
        ($inputName.val() === "") || 
        ($inputVersion.val() === "")){
        alert("All inputs have to be filled!!")
    } else {
        gameContainer(
            $inputPath.val(),
            $inputLink.val(),
            $inputName.val(),
            $inputVersion.val()
        )

        tempPath.push($inputLink.val())
        tempLink.push($inputPath.val())
        tempName.push($inputName.val())
        tempVersion.push($inputVersion.val())

        localStorage.setItem("LSlink", JSON.stringify(tempLink))
        localStorage.setItem("LSpath", JSON.stringify(tempPath))
        localStorage.setItem("LSname", JSON.stringify(tempName))
        localStorage.setItem("LSversion", JSON.stringify(tempVersion))

        $inputPath.val("")
        $inputLink.val("")
        $inputName.val("")
        $inputVersion.val("")
    }
    
})

closeButton.onclick = () => {
    addParendDiv.style.display = "none"
}

addGameButton.onclick = () => {
    addParendDiv.style.display = "grid"
    addGameButton.style.display = "none"
}

addGameButton.style.display = "none"

addGameButtonParent.onmouseover = () => {
    if(addParendDiv.style.display === "none"){
        addGameButton.style.display = "block"
    }
}

addGameButtonParent.onmouseleave = () => {
    addGameButton.style.display = "none"
}

closeFunctionB.onclick = () => {
    functionParent.style.display = "none"
}



loadGamesButton.onclick = () => {
    allGames()
    loadGamesButton.remove()
}

//search

$(document).ready(function(){
    $("#search").on("keyup", function() { //führt funktion bei tippen aus
        var $value = $(this).val().toLowerCase(); //setzt den wert der suche in eine Variable
        $(".gameDiv").filter(function() {                  //filtert die gameDivs 
            $(this).toggle($(this)                         //raus die nicht der
                .text().toLowerCase().indexOf($value) > -1)// search query entsprechen
        });                                                //
    });
});
