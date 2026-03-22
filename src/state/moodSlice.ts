import { createSlice } from '@reduxjs/toolkit';

const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    value: 'neutral',
  },
  reducers: {
    setHappy: (state) => {
      state.value = 'happy';
    },
    setSad: (state) => {
      state.value = 'sad';
    },
    setNeutral: (state) => {
      state.value = 'neutral';
    },
  },
});

export const { setHappy, setSad, setNeutral } = moodSlice.actions;
export default moodSlice.reducer;