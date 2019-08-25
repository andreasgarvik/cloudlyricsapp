import { GENIUS_LYRICS } from '../actions/types'

export default (state = {}, action) => {
	switch (action.type) {
		case GENIUS_LYRICS:
			return action.payload
		default:
			return state
	}
}
