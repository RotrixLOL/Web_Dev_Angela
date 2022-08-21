const btnColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []

var started = false
var level = 0

$("body").keydown(function(e) {
	if(!started) {
		$("#level-title").text(`Level ${level}`)
		nextSequence()
		started = true
	}
})

$(".btn").click(function(e) {
	var userChosenColour = $(this).attr("id")
	userClickedPattern.push(userChosenColour)

	playSound(userChosenColour)
	animatePress(userChosenColour)

	checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log("correct")

		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence()
			}, 1000)
		}
	} else {
		console.log("wrong")

		playSound("wrong")

		$("body").toggleClass("game-over")
		setTimeout(function () {
			$("body").toggleClass("game-over")
		}, 200)

		$("h1").text("Game Over, Press Any Key to Restart")

		startOver()
	}
}

function nextSequence() {
	const randomNumber = Math.floor(Math.random() * 4)
	const randomChosenColour = btnColours[randomNumber]
	userClickedPattern = []
	
	gamePattern.push(randomChosenColour)

	$(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
	playSound(randomChosenColour)
	
	level++
	$("#level-title").text(`Level ${level}`)
}

function startOver() {
	level = 0
	gamePattern = []
	started = false
}

function animatePress(currentColour) {
	$(`#${currentColour}`).toggleClass("pressed")
	setTimeout(function() {
		$(`#${currentColour}`).toggleClass("pressed")
	}, 100);
}

function playSound (audio) {
	new Audio(`sounds/${audio}.mp3`).play()
}