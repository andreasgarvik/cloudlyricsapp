const axios = require('axios')
const keys = require('../config/keys')

module.exports = async q => {
	const response = await axios({
		method: 'get',
		url: 'https://api.genius.com/search',
		params: {
			q
		},
		headers: {
			Authorization: 'Bearer ' + keys.GENIUS_ACCESS_TOKEN
		}
	})
	return response
}
