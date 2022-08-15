var output = []

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
    	if (!i % 3 === 0 && !i % 5 === 0) {
        	output.push(i)
    	} 
    	if (i % 3 === 0) {
    		output.pop()
    		output.push("Fizz")
    	}
    	 if (i % 5 === 0) {
    	 	output.pop()
    		output.push("Buzz")
    	} 
    	if (i % 3 === 0 && i % 5 === 0) {
    		output.pop()
    		output.push("FizzBuzz")
    	}
    }

    console.log(output)
}

fizzBuzz()