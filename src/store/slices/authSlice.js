import { 
    createAsyncThunk, 
    createSlice 
} from '@reduxjs/toolkit';

import { 
    login,
    resetPassword,
    verifySecurityCode,
    setNewPassword,
    signUp
 } from 'api/auth.api';

import { setUser } from './userSlice';

import { 
    deleteToken, 
    deleteUser, 
    persistToken,
    readToken
} from 'services/localStorage.service';

const initialState = {
    token: readToken
};

export const doLogin = createAsyncThunk(
    'auth/doLogin', 
    async (loginPayload, { dispatch }) => 
    login(loginPayload).then((res) => {
        dispatch(setUser(res.user));
        persistToken(res.token);

        return res.token;
    }),
);

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload) =>
    signUp(signUpPayload),
);

export const doResetPassword = createAsyncThunk(
    'auth/doResetPassword',
    async (resetPassPayload) => resetPassword(resetPassPayload),
);

export const doVerifySecurityCode = createAsyncThunk(
    'auth/doVerifySecurityCode',
    async (securityCodePayload) => verifySecurityCode(securityCodePayload),
);

export const doSetNewPassword = createAsyncThunk(
    'auth/doSetNewPassword', 
    async (newPasswordData) => setNewPassword(newPasswordData),
);

export const doLogout = createAsyncThunk(
    'auth/doLogout',
    (payload, { dispatch }) => {
        deleteToken();
        deleteUser();
        dispatch(setUser(null));
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doLogin.fulfilled, (state, action) => {
            state.token = action.payload;
        });
        builder.addCase(doLogout.fulfilled, (state) => {
            state.token = '';
        });
    },
});

export default authSlice.reducer;