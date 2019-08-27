const { Translate } = require('@google-cloud/translate')
const vision = require('@google-cloud/vision')
const genius = require('../services/genius')
const router = require('express').Router()
const axios = require('axios')
const fs = require('fs')
const util = require('util')

const createFile = util.promisify(fs.writeFile)
const deleteFile = util.promisify(fs.unlink)

const translate = new Translate()
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
		console.log(result.fullTextAnnotation.text.slice(0, 50))
		const response = await genius(result.fullTextAnnotation.text.slice(0, 50))
		res.send(response.data.response)
	}
})

module.exports = router
