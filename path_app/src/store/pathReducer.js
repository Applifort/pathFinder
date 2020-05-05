import { createSlice } from '@reduxjs/toolkit';


const pathSlice = createSlice({
  name: 'pathGrid',
  initialState: {
    width: 5,
    height: 5,
    startPoint: '0:0',
    finishPoint: '4:4',
    mode: null,
  },
  reducers: {
    setMode: (state, { mode }) => {
      state.mode = mode;
    },
  },
});

export const {
  setMode,
} =pathSlice.actions;

export default pathSlice.reducer;