import axios from 'axios'
import {
	GENIUS_SEARCH,
	GENIUS_LYRICS,
	GOOGLE_LANGUAGES,
	SELECT_LANGUAGE,
	SELECT_SONG,
	NEW_SESSION,
	IMAGE_SEARCH
} from './types'

export const imageSearch = image => async dispatch => {
	const res = await axios.post('/api/google/image', {
		data: {
			image,
			name: Date.now()
		}
	})

	dispatch({
		type: IMAGE_SEARCH,
		payload: res.data
	})
}

export const newGeniusSearch = q => async dispatch => {
	const res = await axios.get('/api/genius/search', {
		params: {
			q
		}
	})

	dispatch({
		type: GENIUS_SEARCH,
		payload: res.data
	})
}

export const getGeniusLyrics = (id, language) => async dispatch => {
	const res = await axios.get('/api/genius/lyrics', {
		params: {
			id,
			language
		}
	})

	dispatch({
		type: GENIUS_LYRICS,
		payload: res.data
	})
}

export const getLanguages = () => async dispatch => {
	const res = await axios.get('/api/google/languages')

	dispatch({
		type: GOOGLE_LANGUAGES,
		payload: res.data
	})
}

export const selectLanguage = l => dispatch => {
	dispatch({
		type: SELECT_LANGUAGE,
		payload: l
	})
}

export const selectSong = s => dispatch => {
	dispatch({
		type: SELECT_SONG,
		payload: s
	})
}

export const flushStore = () => dispatch => {
	dispatch({
		type: NEW_SESSION
	})
}
