const { Translate } = require('@google-cloud/translate').v2
const vision = require('@google-cloud/vision')
const genius = require('../services/genius')
const keys = require('../config/keys')
const router = require('express').Router()

const translate = new Translate({
	projectId: keys.GOOGLE_PROJECT_ID
})

const client = new vision.ImageAnnotatorClient()

router.get('/languages', async (req, res) => {
	const [languages] = await translate.getLanguages()
	res.send({ languages })
})

router.post('/image', async (req, res) => {
	const base64Image = req.body.data.image.split(';base64,').pop()
	const image = Buffer.from(base64Image, 'base64')
	const [result] = await client.textDetection(image)
	if (!result.fullTextAnnotation) {
		res.send({ error: 'Did not find any text in the image. Try again!' })
	} else {
		const response = await genius(result.fullTextAnnotation.text.slice(0, 50))
		res.send(response.data.response)
	}
})

module.exports = router
