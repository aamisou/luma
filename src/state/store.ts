import { configureStore } from '@reduxjs/toolkit';
import journalReducer from './journalSlice';
import moodReducer from './moodSlice';

const store = configureStore({
    reducer: {
        journal: journalReducer,
        mood: moodReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;