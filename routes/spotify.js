const router = require('express').Router()
const keys = require('../config/keys')
const axios = require('axios')

let token = null

router.get('/login', async (req, res) => {
	const response = await axios({
		method: 'post',
		url: 'https://accounts.spotify.com/api/token',
		params: {
			grant_type: 'client_credentials'
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		auth: {
			username: keys.SPOTIFY_CLIENT_ID,
			password: keys.SPOTIFY_CLIENT_SECRET
		}
	})
	if (response.data.access_token) {
		token = response.data.access_token
		res.send({ id: 123 })
	}
})

router.get('/search/artist', async (req, res) => {
	const response = await axios({
		method: 'get',
		url: `https://api.spotify.com/v1/search`,
		params: {
			q: req.query.q,
			type: 'artist'
		},
		headers: {
			Authorization: 'Bearer ' + token
		}
	})
	res.send(response.data)
})

module.exports = router
