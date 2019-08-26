import { IMAGE_SEARCH } from '../actions/types'

export default (state = {}, action) => {
	switch (action.type) {
		case IMAGE_SEARCH:
			return action.payload
		default:
			return state
	}
}
