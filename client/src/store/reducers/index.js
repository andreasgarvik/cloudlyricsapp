import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import lyricsReducer from './lyricsReducer'
import googleReducer from './googleReducer'
import languageReducer from './languageReducer'
import songReducer from './songReducer'

const appReducer = combineReducers({
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
