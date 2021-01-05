import { GithubProfile } from 'src/api/github';
import { getUserProfileProfileSuccess, getUserProfileError, getUserProfileRequest } from './actions';

export type GithubAction = 
	| ReturnType<typeof getUserProfileRequest>
	| ReturnType<typeof getUserProfileProfileSuccess>
	| ReturnType<typeof getUserProfileError>

export type GithubState = {
	userProfile: {
		loading: boolean;
		error: Error | null;
		data: GithubProfile | null;
	};
};


