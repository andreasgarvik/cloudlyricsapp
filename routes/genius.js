const router = require('express').Router()
const Lyricist = require('lyricist')
const keys = require('../config/keys')
const GoogleTranslate = require('../services/google')
const genius = require('../services/genius')

const lyricist = new Lyricist(keys.GENIUS_ACCESS_TOKEN)

router.get('/search', async (req, res) => {
	const response = await genius(req.query.q)
	res.send(response.data.response)
})

router.get('/lyrics', async (req, res) => {
	const song = await lyricist.song(req.query.id, {
		fetchLyrics: true
	})
	if (req.query.language === 'en') {
		res.send(song)
	} else {
		const lyrics = await GoogleTranslate(song.lyrics, req.query.language)
		res.send({ lyrics })
	}
})

module.exports = router
