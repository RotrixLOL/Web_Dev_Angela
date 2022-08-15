var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1)
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1)
img1 = document.getElementsByClassName("img1")[0]
img2 = document.getElementsByClassName("img2")[0]

img1.setAttribute("src", `images/dice${randomNumber1}.png`)
img2.setAttribute("src", `images/dice${randomNumber2}.png`)

title = document.querySelector("h1")

if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    title.innerHTML = "Player 2 Wins! 🚩"
} else {
    title.innerHTML = "Draw!"
}