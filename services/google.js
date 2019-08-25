const { Translate } = require('@google-cloud/translate')
const keys = require('../config/keys')

const GoogleTranslate = async (song, language) => {
	const translate = new Translate({
		projectId: keys.GOOGLE_PROJECT_ID
	})

	const [translation] = await translate.translate(song, language)
	return translation
}

module.exports = GoogleTranslate
