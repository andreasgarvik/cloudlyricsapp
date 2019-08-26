import { GENIUS_SEARCH, IMAGE_SEARCH } from '../actions/types'

export default (state = [], action) => {
	switch (action.type) {
		case GENIUS_SEARCH:
			return action.payload
		case IMAGE_SEARCH:
			return action.payload
		default:
			return state
	}
}
