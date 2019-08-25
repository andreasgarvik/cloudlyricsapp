const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

// Config
const app = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(logger('tiny'))

// Routes
const spotify = require('./routes/spotify')
const genius = require('./routes/genius')
const google = require('./routes/google')
app.use('/api/spotify', spotify)
app.use('/api/genius', genius)
app.use('/api/google', google)

// Serving frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

// Starting server
const PORT = process.env.PORT || 5000
app.listen(PORT)
