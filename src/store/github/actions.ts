
import { GithubProfile } from '@src/api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE_REQUEST = 'github/GET_USER_PROFILE_REQUEST' as const;
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS' as const;
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR' as const;

export const getUserProfileRequest = () => ({
	type: GET_USER_PROFILE_REQUEST
});

export const getUserProfileProfileSuccess = (profile: GithubProfile) => ({
	type: GET_USER_PROFILE_SUCCESS,
	payload: profile
});

export const getUserProfileError = (error: AxiosError) => ({
	type: GET_USER_PROFILE_ERROR,
	payload: error
});