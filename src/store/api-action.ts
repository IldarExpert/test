import {AuthStatus} from '../consts';
import {ThunkActionResult} from '../types/actions';
import {RegData} from '../types/user-info';
import {saveAuthErrorMessage, saveUserData, updateAuthStatus, updateLoadingStatus} from './actions';

export const requireAuthorization = (email: string, password: string): ThunkActionResult => {
    return async (dispatch, _getState, api) => {
        dispatch(updateLoadingStatus(true));

        setTimeout(() => {
            const regData = localStorage.getItem('Register_data');
            const userRegister: RegData | undefined = regData && JSON.parse(regData).find((item: RegData) => item.email === email);
            if (!userRegister && regData) {
                dispatch(saveAuthErrorMessage(`Пользователя ${email} не существует (есть test@test.ru, test1)`));
            }

            if (userRegister?.password === password) {
                dispatch(saveUserData({email}))
                dispatch(updateAuthStatus(AuthStatus.Auth));
                dispatch(saveAuthErrorMessage(''))
            }

            if (userRegister?.password !== password) {
                userRegister && dispatch(saveAuthErrorMessage(`Неверный пароль (есть test@test.ru, test1)`));
            }

            dispatch(updateLoadingStatus(false));
        }, 2000)
    }
}

export const requireLogOut = (): ThunkActionResult => {
    return async (dispatch, _getState, api) => {
        dispatch(updateLoadingStatus(true));
        dispatch(updateAuthStatus(AuthStatus.NoAuth));
        dispatch(updateLoadingStatus(false));

    }
}