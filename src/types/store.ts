import {AuthStatus} from '../consts';
import {RootState} from '../store/root-reducer';
import {UserInfo} from './user-info';

export type UserReducerType = {
    authorizationStatus: AuthStatus,
    userInfo: UserInfo,
    authErrorMessage: string,
    isLoading: boolean,
}

export type State = RootState;