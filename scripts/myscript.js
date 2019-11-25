console.log("This is me, hi. Im script.")
let title = document.getElementById("this-is-title")
//let S = document.createElement("h1")
let S, A, N, T, I, B, E, L, Y, O;

let arr = ["S", "A", "N", "T", "I", "B", "E", "L", "L", "O"]

//for (let i = 0; i < 10; i++){
// setInterval(Subelo(arr[0]), 20000000)
// setInterval(abb(), 20000000000)
//}
function abb() {
    console.log("hi im interval")
}
function Subelo(letter) {
    let elem = document.createElement("h1")
    elem.innerHTML = letter
    title.appendChild(elem)
}


