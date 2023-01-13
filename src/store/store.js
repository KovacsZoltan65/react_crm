import { configureStore } from '@reduxjs/toolkit';
//import { errorLoggingMiddleware } from '@app/store/middlewares/errorLogging.middleware';
import rootReducer from 'store/slices';

export const store = configureStore({
    reducer: rootReducer
});