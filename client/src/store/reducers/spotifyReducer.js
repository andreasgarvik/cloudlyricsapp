import { NEW_SEARCH, TOP_TRACKS } from '../actions/types'

export default (state = {}, action) => {
	switch (action.type) {
		case NEW_SEARCH:
			return action.payload
		case TOP_TRACKS:
			return action.payload
		default:
			return state
	}
}
