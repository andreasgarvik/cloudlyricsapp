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
app.use(logger('tiny'))
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// Routes
const genius = require('./routes/genius')
const google = require('./routes/google')
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
const PORT = process.env.PORT || 8080
app.listen(PORT)
