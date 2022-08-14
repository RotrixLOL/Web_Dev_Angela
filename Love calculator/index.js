prompt("What is your name?")
prompt("What is their name?")

var loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1

if(loveScore < 50) {
    alert(`Your love is low: ${loveScore}%`)
} else if(loveScore = 50) {
    alert(`Your love is regular: ${loveScore}%`)
} else {
    alert(`Your love is high! ${loveScore}%`)
}