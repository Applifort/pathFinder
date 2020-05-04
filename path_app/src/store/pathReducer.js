import { createSlice } from '@reduxjs/toolkit';


const pathSlice = createSlice({
  name: 'pathGrid',
  initialState: {
    width: 50,
    height: 50,
    startPonit: '0:0',
    finishPoint: '49:49',
    mode: null,
  },
  reducers: {
    setMode: (state, { payload }) => {
      state.mode = payload;
    },
  },
});

export const {
  setState,
} =pathSlice.actions;

export default pathSlice.reducer;