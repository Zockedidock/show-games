localStorage.hC = 1

const test = (c, name, version) => {
    localStorage.setItem(`version${c}`, `${version}`)
    localStorage.setItem(`name${c}`, `${name}`)
    localStorage.getItem("hC") = localStorage.getItem("hC") + 1
}

test(localStorage.getItem("hC"), "test1", 12)
test(localStorage.getItem("hC"), "test2", 3)

for (var i = 0; i < localStorage.getItem("hC"); i++){
    var n = document.createElement("a")
    var v = document.createElement("p")
    n.innerHTML = "test"
    $("#main").append(n)
    $("#main").append(v)
}