var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
	var randomPos = Math.floor(Math.random() * names.length)
	var name = names[randomPos]
	console.log(`${name} is going to buy lunch today!`)
}

whosPaying(names)