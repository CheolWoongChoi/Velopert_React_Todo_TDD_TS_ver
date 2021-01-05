
import { GithubState, GithubAction } from './types';
import { GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';

const initialState: GithubState = {
	userProfile: {
		loading: false,
		error: null,
		data: null
	}
};

function github(state: GithubState = initialState, action: GithubAction) {
	switch(action.type) {
		case GET_USER_PROFILE_REQUEST:
			return {
				...state,
				userProfile: {
					loading: true,
					error: null,
					data: null
				}
			}
		case GET_USER_PROFILE_SUCCESS:
			return {
				...state,
				userProfile: {
					loading: false,
					error: null,
					data: action.payload
				}
			}
		case GET_USER_PROFILE_ERROR:
			return {
				...state,
				userProfile: {
					loading: false,
					error: action.payload,
					data: null
				}
			}
		default:
			return state;
	}
}

export default github;