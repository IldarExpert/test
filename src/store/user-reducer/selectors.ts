import {State} from '../../types/store';

export const getAuthStatus = (state: State) => state.user.authorizationStatus;

export const getAuthErrorMessage = (state: State) => state.user.authErrorMessage;

export const getUserInfo = (state: State) => state.user.userInfo;

export const getIsLoading = (state: State) => state.user.isLoading;
