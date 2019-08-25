import { combineReducers } from 'redux'
import spotifyReducer from './spotifyReducer'
import loginReducer from './loginReducer'
import searchReducer from './searchReducer'
import lyricsReducer from './lyricsReducer'
import googleReducer from './googleReducer'
import languageReducer from './languageReducer'
import songReducer from './songReducer'

const appReducer = combineReducers({
	spotify: spotifyReducer,
	auth: loginReducer,
	search: searchReducer,
	lyrics: lyricsReducer,
	google: googleReducer,
	language: languageReducer,
	song: songReducer
})

const rootReducer = (state, action) => {
	if (action.type === 'NEW_SESSION') {
		state = undefined
	}
	return appReducer(state, action)
}

export default rootReducer
