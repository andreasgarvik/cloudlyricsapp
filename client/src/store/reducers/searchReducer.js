import { GENIUS_SEARCH } from '../actions/types'

export default (state = [], action) => {
	switch (action.type) {
		case GENIUS_SEARCH:
			return action.payload
		default:
			return state
	}
}
