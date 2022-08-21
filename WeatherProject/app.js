const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use('/', express.static(__dirname))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
})



app.post('/', function(req, res) {
	const city = req.body.city
	const apiKey = '01c4cd99e3baf1a74fdccb038f2cf572'
	const unit = 'metric'
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
	axios.get(url)
		.then(response => {
			const main = response.data
			const weather = {
				temp: main.main.temp,
				humidity: main.main.humidity,
				city: main.name,
				country: main.sys.country,
				icon: `https://openweathermap.org/img/wn/${main.weather[0].icon}@4x.png`,
				description: main.weather[0].description
			}

			res.send(`
				<h2>Temperature in ${weather.city}, ${weather.country} is ${weather.temp} degrees Celsius</h2>
				<p>Humidity: ${weather.humidity}%</p>
				<p>Currently ${weather.description}</p>
				<img src=${weather.icon} alt=${weather.description} width="125px">
			`)
		}).catch(err => {
			res.sendStatus(403)
			console.log(err)
		})
})

app.listen(3000, function() {
	console.log('App running on port 3000')
})


// {
//   coord: { lon: 2.4445, lat: 41.5421 },
//   weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
//   base: 'stations',
//   main: {
//     temp: 29.4,
//     feels_like: 33.21,
//     temp_min: 28.53,
//     temp_max: 32.94,
//     pressure: 1006,
//     humidity: 68
//   },
//   visibility: 10000,
//   wind: { speed: 2.24, deg: 166, gust: 4.92 },
//   clouds: { all: 9 },
//   dt: 1660746910,
//   sys: {
//     type: 2,
//     id: 2010098,
//     country: 'ES',
//     sunrise: 1660712454,
//     sunset: 1660762083
//   },
//   timezone: 7200,
//   id: 3117164,
//   name: 'Mataró',
//   cod: 200
// }