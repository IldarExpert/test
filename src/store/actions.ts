import {createAction} from '@reduxjs/toolkit';
import {AuthStatus} from '../consts';
import {ActionType} from '../types/actions';
import {UserInfo} from '../types/user-info';

export const updateAuthStatus = createAction<AuthStatus>(ActionType.updateAuthStatus);
export const saveAuthErrorMessage = createAction<string>(ActionType.saveAuthErrorMassage);
export const saveUserData = createAction<UserInfo>(ActionType.saveUserData);
export const updateLoadingStatus = createAction<boolean>(ActionType.updateLoadingStatus);
