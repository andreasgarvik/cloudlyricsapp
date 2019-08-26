import { NEW_SEARCH } from '../actions/types'

export default (state = {}, action) => {
	switch (action.type) {
		case NEW_SEARCH:
			return action.payload
		default:
			return state
	}
}
