import { SELECT_LANGUAGE } from '../actions/types'

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_LANGUAGE:
			return action.payload
		default:
			return state
	}
}
