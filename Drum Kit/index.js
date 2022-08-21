var numOfBtn = document.querySelectorAll(".drum").length

// Detect click
for (let i = 0; i < numOfBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML)
        btnAnimation(this.innerHTML)
    })
}

// Detect key press
document.addEventListener("keydown", function(e) {
    playSound(e.key)
    btnAnimation(e.key)
})

// FUNCTIONS
////////////////////////////////////////////////////////////////////////////
function Sound (audio) {
	this.audio = audio
	new Audio(`sounds/${this.audio}.mp3`).play()
}

function playSound (key) {
    switch (key) {
                case "w":
                    new Sound('tom-1')
                    break;
                case "a":
                    new Sound('tom-2')
                    break;
                case "s":
                    new Sound('tom-3')
                    break;
                case "d":
                    new Sound('tom-4')
                    break;
                case "j":
                    new Sound('kick-bass')
                    break;
                case "k":
                    new Sound('snare')
                    break;
                case "l":
                    new Sound('crash')
                    break;

                default: console.log(this.innerHTML)
    }
}

function btnAnimation(key) {
    var activeBtn = document.querySelector(`.${key}`)
    activeBtn.classList.toggle("pressed")
    
    setTimeout(function() {
        activeBtn.classList.toggle("pressed")
    }, 200);
}