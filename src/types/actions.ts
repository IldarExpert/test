import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './store';

export enum ActionType {
    updateLoadingStatus = 'data/update_loading_status',
    updateAuthStatus = 'user/update_auth_status',
    saveUserData = 'user/save_user_data',
    saveAuthErrorMassage = 'user/save_auth_error_massage',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;