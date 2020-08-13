const root = $("div#root"),
      addButton = $("button#addButton"),
      closeButton = document.getElementById("closeButton"),
      addGameButton = document.getElementById("addGameButton"),
      addParendDiv = document.getElementById("addParentDiv"),
      functionParent = document.getElementById("functionParent"),
      closeFunctionB = document.getElementById("closeFunctionButton"),
      functionInput = document.getElementById("functionInput"),
      addGameButtonParent = document.getElementById("addGameButtonParent"),
      loadGamesButton = document.getElementById("loadGamesButton")

functionParent.style.display = "none"

gameContainer = (iconPath, link, name, version) => {
    const img = document.createElement("img"),
          gameName = document.createElement("a"),
          gameVersion = document.createElement("p"),
          gameDiv = document.createElement("DIV"),
          closeB = document.createElement("button"),
          functionB = document.createElement("button")

    root.append(gameDiv)

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
    
    gameDiv.className = "gameDiv"
    gameDiv.appendChild(img)
    gameDiv.appendChild(gameName)
    gameDiv.appendChild(gameVersion)
    gameDiv.appendChild(closeB)
    gameDiv.appendChild(functionB)

    closeB.onclick = () => {
        gameDiv.remove()
    }
    functionB.onclick = () => {
        functionParent.style.display = "block"
        functionInput.value = `gameContainer(\n    \"${iconPath}\",\n    \"${link}\",\n    \"${name}\",\n    \"${version}\"\n)`
    }
}

addParendDiv.style.display = "none"

addButton.click(() => {
    const inputPath = $("input#inputPath") 
    const inputLink = $("input#inputLink") 
    const inputName = $("input#inputName") 
    const inputVersion = $("input#inputVersion")
    if ((inputPath.val() === "") || (inputLink.val() === "") || (inputName.val() === "") || (inputVersion.val() === "")){
        alert("All inputs have to be filled!!")
    } else {
        gameContainer(
            inputPath.val(),
            inputLink.val(),
            inputName.val(),
            inputVersion.val()
        )
        inputPath.val("")
        inputLink.val("")
        inputName.val("")
        inputVersion.val("")
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

allGames = () => {
    gameContainer("https://imag.malavida.com/mvimgbig/download-fs/dreams-of-desire-25123-0.jpg", "https://f95zone.to/threads/dreams-of-desire-v1-0-3-lewdlab.1904/", "Dreams of Desire", "1.0.3 Completed")
    gameContainer("https://ih1.redbubble.net/image.778581959.7761/st,small,507x507-pad,600x600,f8f8f8.u11.jpg", "https://f95zone.to/threads/amnesia-v0-2c-super-alex.44511/", "Amnesia", "v0.2c")
    gameContainer("https://i.pinimg.com/236x/db/c6/f9/dbc6f97fa21927334f3472b66bca182e.jpg", "https://f95zone.to/threads/milfy-city-v0-6e-icstor.8012/", "Milfy City", "v0.6e")
    gameContainer("https://static.f95zone.to/data/avatars/h/1773/1773363.jpg?1588198759", "https://f95zone.to/threads/savior-v0-4c-purple-fellas.40217/", "Savior", "v0.4c")
    gameContainer("https://img.itch.zone/aW1nLzI2NDA0MDkuanBn/315x250%23cm/wHjY0C.jpg", "https://f95zone.to/threads/tales-from-the-unending-void-v0-4-extra-perverteer.42668/", "Tales from the Unending Void", "v0.4")
    gameContainer("https://c10.patreonusercontent.com/3/eyJ3IjoxOTIwfQ%3D%3D/patreon-media/p/campaign/3130967/9fcd64db13ea46f185c5d61253627220/4.png?token-time=1599177600&amp;token-hash=Ul2Q0B-yYHgrAgzHouwdaq4m7DrCzvmSO-bbuQSpVJI%3D", "https://f95zone.to/threads/deliverance-ch-9-1thousand.36263/", "Devilerance", "ch. 9")
    gameContainer("https://apkmagic.com.ar/wp-content/uploads/2020/04/Lunars-Chosen-18-v0.9-Beta-2-MOD.jpeg", "https://f95zone.to/threads/lunars-chosen-v0-10-1-patreon-ptgames.28364/", "Lunars Chosen", "v0.10.1")
    gameContainer("https://apkplusmod.com/logo/acting-lessons-mod-apk.jpg", "https://f95zone.to/threads/acting-lessons-v1-0-2-drpinkcake.12181/", "Acting Lessons", "v1.0.2 Completed")
    gameContainer("https://steamcdn-a.akamaihd.net/steam/apps/1126320/header.jpg", "https://f95zone.to/threads/being-a-dik-v0-5-2-dr-pinkcake.25332/", "Being a DIK", "v0.5.2")
    gameContainer("https://2.bp.blogspot.com/-xMpRqj4dM5w/WxQtFZbRXuI/AAAAAAAAADQ/fASbVbYJkK0mLHmpn9khUrnRCpXHriFggCLcBGAs/w1200-h630-p-k-no-nu/82211_G3fcCxGjzlNmOxv19I-8JSLYggFJdYbAcjnDEmw97zEXNwO3GZ79mvpTxo_LK5aD.png", "https://f95zone.to/threads/f-i-l-f-v0-11c-iccreations.9605/", "F.I.L.F", "v0.11c")
    gameContainer("https://attachments.f95zone.to/2019/07/367944_AD.png", "https://f95zone.to/threads/altered-destiny-v0-02b-iccreations.46615/", "Altered destiny", "v0.02a")
    gameContainer("https://apkmagic.com.ar/wp-content/uploads/2020/04/Anna-Exciting-Affection-v1.6-MOD-18.jpeg", "https://f95zone.to/threads/anna-exciting-affection-unofficial-renpy-remake-v2-0-osmcuser132.8482/", "Anna exciting affection [Ren'py]", "v2.0")
    gameContainer("https://pbs.twimg.com/media/EZb2QfIXYAgPh5L.png", "https://f95zone.to/threads/treasure-of-nadia-v44081-nlt-media.38582/", "Treasure of Nadia", "v44.081")
    gameContainer("https://attachments.f95zone.to/2019/11/478352_Connected_2019-11-18_23-44-28-517.jpg", "https://f95zone.to/threads/connected-v0-2-5-chainzero.40614/", "Connected", "v0.2")
    gameContainer("https://apkmagic.com.ar/wp-content/uploads/2020/06/A-Mothers-Love-vPart-7MOD-18.jpeg", "https://f95zone.to/threads/a-mothers-love-part-1-8-plus-orborigin.25146/", "a mothers love", "part 7")
    gameContainer("https://img.itch.zone/aW1nLzIwNjk2MDAucG5n/original/JZhLMr.png", "https://f95zone.to/threads/away-from-home-ep-1-9-vatosgames.29666/", "Away from Home", "ep 9")
    gameContainer("https://i.imgur.com/UuXRnLY.jpg", "https://f95zone.to/threads/babysitters-v0-0-4b-t4bbo.30446/", "Babysitters", "v0.0.4")
    gameContainer("https://attachments.f95zone.com/2018/11/198104_3gndoor03.jpg", "https://f95zone.to/threads/become-a-rock-star-v0-60-mr-jet.17836/", "Become a Rockstar", "v0.60")
    gameContainer("https://i.imgur.com/fVuAdkW.jpg", "https://f95zone.to/threads/behind-the-walls-s01e03-test-lstudio.22720/", "Behind the Walls", "s01 e03")
    gameContainer("https://apkmagic.com.ar/wp-content/uploads/2019/09/1567438016_868_Betrayed-18-v0.4.5-MOD.jpeg", "https://f95zone.to/threads/betrayed-v0-62-joraell.17512/", "Betrayed", "v0.61")
    gameContainer("https://preview.redd.it/92xkqzbe2ey41.jpg?width=829&amp;format=pjpg&amp;auto=webp&amp;s=4e019f675084d661dd6811fb627acfbf7d1d3317", "https://f95zone.to/threads/big-brother-fan-game-v0-13-fix-7-porngodnoob.19709/", "Big Brother [Ren'py]", "v0.13")
    gameContainer("https://attachments.f95zone.to/2018/08/147944_PORTADA_JOC_FINAL_v8_PER_F95ZONE.png", "https://f95zone.to/threads/big-citys-pleasures-v0-2-4c-porcus.16290/", "Big city's Pleasures", "v0.2.2")
    gameContainer("https://attachments.f95zone.to/2019/04/288157_bm_cover.jpg", "https://f95zone.to/threads/bad-memories-v0-5-2-recreation.28008/", "Bad memories", "v0.5")
    gameContainer("https://img.itch.zone/aW1hZ2UvNDA1ODA3LzIwMTQ0MDYucG5n/original/8KLBvD.png", "https://f95zone.to/threads/c-plan-v0-0-3a-lovemilfs.28762/", "C-Plan", "v0.0.3a")
    gameContainer("https://pp.userapi.com/c854020/v854020130/70b2e/MNj8TQMrpPE.jpg", "https://f95zone.to/threads/come-inside-v0-2-1-ttll.32087/", "Come inside", "v0.2.1")
    gameContainer("https://apklord.com/logos/Dating-My-Daughter.jpg", "https://f95zone.to/threads/dating-my-daughter-ch-1-3-v0-27-mrdots-games.597/", "Dating my Daughter", "ch 3 v0.27")
    gameContainer("https://i1.wp.com/love-joint.com/blog/wp-content/uploads/2020/08/Epi17.png?fit=760%2C428", "https://f95zone.to/threads/double-homework-ep-12-palmer.28238/", "Double Homework", "ep 17")
    gameContainer("https://apkwarehouse.org/wp-content/uploads/2018/08/dreams-of-desire-the-lost-memories-apk-apkwarehouse.org-7-300x275.jpg", "https://f95zone.to/threads/dreams-of-desire-the-lost-memories-lewdlab.15060/", "Dreams of Desire: The Lost Memories", "Completed")
    gameContainer("https://platinmods.com/attachments/e29a9db71714c343a2f841e7fad051c4-jpg-jpg.186924/", "https://f95zone.to/threads/echoes-of-lust-s2e1-inceton.21005/", "Echoes of Lust", "s02 e01")
    gameContainer("https://img.itch.zone/aW1nLzI2MzM5NjYucG5n/original/D9QD0Y.png", "https://f95zone.to/threads/false-hero-v0-25-beta-enyo-eerie.14204/", "False Hero", "v0.25")
    gameContainer(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8xQcnaYRVCzY9oUI78SusmHF8Gkh9buSdLw&usqp=CAU",
        "https://store.steampowered.com/app/1358250/City_of_Broken_Dreamers_Book_One/",
        "City of Broken Dreamers: Book One",
        "Completed"
    )
}

loadGamesButton.onclick = () => {
    allGames()
    loadGamesButton.remove()
}

//search

$(document).ready(function(){
    $("#search").on("keyup", function() { //führt funktion bei tippen aus
        var value = $(this).val().toLowerCase(); //setzt den wert der suche in eine Variable
        $("#root *").filter(function() { //filtert elemente aus div#root
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});