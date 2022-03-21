import {AuthStatus} from '../consts';
import {server} from '../server/server';
import {ThunkActionResult} from '../types/actions';
import {saveAuthErrorMessage, saveUserData, updateAuthStatus, updateLoadingStatus} from './actions';


export const checkAuthStatus = (): ThunkActionResult => {
    return async (dispatch, _getState, _extraArgument) => {
        dispatch(updateLoadingStatus(true));

        try {
            const token = localStorage.getItem('Register_data');
            const response: any = await server.get(token);
            console.log('response', response);
            if (response.status === 200) {
                dispatch(updateAuthStatus(AuthStatus.Auth));
                dispatch(saveUserData(response.data));
            }
        } catch (e) {
            console.log('e', e);
            dispatch(updateAuthStatus(AuthStatus.NoAuth));
        }

        dispatch(updateLoadingStatus(false));
    }
}

export const requireAuthorization = (login: string, password: string, agree: boolean): ThunkActionResult => {
    return async (dispatch, _getState, _extraArgument) => {
        dispatch(updateLoadingStatus(true));

        try {
            const response: any = await server.post({login, password});

            if (response.status === 200) {
                dispatch(updateAuthStatus(AuthStatus.Auth));
                dispatch(saveUserData(response.data));
                dispatch(saveAuthErrorMessage(''));
                console.log(agree);
                if (agree) localStorage.setItem('Register_data', response.data.token);
            }
        } catch (e: any) {
            console.log('e', e);
            dispatch(saveAuthErrorMessage(e.data.error));
        }

        dispatch(updateLoadingStatus(false));
    }
}

export const requireLogOut = (): ThunkActionResult => {
    return async (dispatch, _getState, _extraArgument) => {
        dispatch(updateLoadingStatus(true));
        dispatch(updateAuthStatus(AuthStatus.NoAuth));
        dispatch(updateLoadingStatus(false));
        localStorage.removeItem('Register_data');
    }
}