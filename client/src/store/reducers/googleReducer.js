import { GOOGLE_LANGUAGES } from '../actions/types'

export default (state = [], action) => {
	switch (action.type) {
		case GOOGLE_LANGUAGES:
			return action.payload
		default:
			return state
	}
}
