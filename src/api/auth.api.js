import { httpApi } from '../api/http.api';
import './mocks/auth.api.mock';
import { UserModel } from '../domain/UserModel';

export const login = (loginPayload) => {
    httpApi
        .post('login', Object.assign({}, loginPayload))
        .then(({ data }) => data);
}

export const signUp = (signUpData) => {
    httpApi
        .post('signUp', Object.assign({}, signUpData))
        .then(({ data }) => data);
}

export const resetPassword = (resetPasswordPayload) => {
    httpApi
        .post('forgotPassword', Object.assign({}, resetPasswordPayload))
        .then(({ data }) => data);
}

export const verifySecurityCode = (securityCodePayload) => {
    httpApi
        .post('verifySecurityCode', Object.assign({}, securityCodePayload))
        .then(({ data }) => data);
}

export const setNewPassword = (newPasswordData) => {
    httpApi
        .post('setNewPassword', Object.assign({}, newPasswordData))
        .then(({ data }) => data);
}