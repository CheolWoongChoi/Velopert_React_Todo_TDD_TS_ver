import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '@src/api/github';
import { getUserProfileRequest, getUserProfileProfileSuccess, getUserProfileError} from './actions';

export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
	return async dispatch => {
		dispatch(getUserProfileRequest());

		try {
			const userProfile = await getUserProfile(username);
			
			dispatch(getUserProfileProfileSuccess(userProfile));
		} catch (e) {
			dispatch(getUserProfileError(e));
		}
	}
}