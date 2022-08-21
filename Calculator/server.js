const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index1.html')
})

app.post('/', (req, res) => {
	var result = parseInt(req.body.input1) + parseInt(req.body.input2)
	res.send(`Results: ${result.toString()}`)
})

app.get('/bmicalculator', (req, res) => {
	res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
	var bmi = parseFloat((req.body.weight / (req.body.height * req.body.height)))
	res.send(`Your BMI is: ${bmi}`)
})

app.listen(3000, () => {
    console.log('App listening on port 3000...')
});