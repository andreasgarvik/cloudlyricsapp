const { Translate } = require('@google-cloud/translate')
const router = require('express').Router()
const axios = require('axios')

const translate = new Translate()

router.get('/languages', async (req, res) => {
	const [languages] = await translate.getLanguages()
	res.send({ languages })
})

module.exports = router
