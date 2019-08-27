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
	await createFile(`${req.body.data.name}.png`, base64Image, {
		encoding: 'base64'
	})
	const [result] = await client.textDetection(`${req.body.data.name}.png`)
	await deleteFile(`${req.body.data.name}.png`)
	const response = await genius(result.fullTextAnnotation.text.slice(0, 50))
	res.send(response.data.response)
})

module.exports = router
