import {createReducer} from '@reduxjs/toolkit';
import {AuthStatus} from '../../consts';
import {UserReducerType} from '../../types/store';
import {saveAuthErrorMessage, saveUserData, updateAuthStatus, updateLoadingStatus} from '../actions';

export const initialState: UserReducerType = {
    authorizationStatus: AuthStatus.Unknown,
    userInfo: {
        "email": "Oliver.conner@gmail.com",
    },
    authErrorMessage: '',
    isLoading: false,
}

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateAuthStatus, (state, action) => {
            state.authorizationStatus = action.payload;
        })
        .addCase(saveUserData, (state, action) => {
            state.userInfo = action.payload;
        })
        .addCase(saveAuthErrorMessage, (state, action) => {
            state.authErrorMessage = action.payload;
        })
        .addCase(updateLoadingStatus, (state, action) => {
            state.isLoading = action.payload;
        })
});