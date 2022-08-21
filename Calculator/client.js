console.log('Client-side code running')

var input1 = document.querySelector('#input1')
var input2 = document.querySelector('#input2')
var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    var results = calculate(input1.value, input2.value)
    document.querySelector('p').innerHTML = `Results: ${results}`
})

function calculate(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}