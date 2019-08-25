const router = require('express').Router()
const keys = require('../config/keys')
const axios = require('axios')
const Lyricist = require('lyricist')
const GoogleTranslate = require('../services/google')

const lyricist = new Lyricist(keys.GENIUS_ACCESS_TOKEN)

router.get('/search', async (req, res) => {
	const response = await axios({
		method: 'get',
		url: 'https://api.genius.com/search',
		params: {
			q: req.query.q
		},
		headers: {
			Authorization: 'Bearer ' + keys.GENIUS_ACCESS_TOKEN
		}
	})
	res.send(response.data.response)
})

router.get('/lyrics', async (req, res) => {
	const song = await lyricist.song(req.query.id, {
		fetchLyrics: true
	})
	const lyrics = await GoogleTranslate(song.lyrics, req.query.language)
	res.send({ lyrics })
})

module.exports = router
