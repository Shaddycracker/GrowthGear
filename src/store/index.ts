import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './Slices/querySlice.ts';
import historyReducer from './Slices/historySlice.ts';
import settingsReducer from './Slices/settingsSlice.ts';

export const store = configureStore({
    reducer: {
        query: queryReducer,
        history: historyReducer,
        settings: settingsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;