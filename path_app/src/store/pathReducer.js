import { createSlice } from '@reduxjs/toolkit';

const pathSlice = createSlice({
  name: 'path',
  initialState: {
    width: 30,
    height: 50,
    startPoint: '14:17',
    finishPoint: '10:13',
    mode: null,
    visited: [],
    wall: [],
  },

  reducers: {
    setMode: (state, { payload }) => {
      state.mode = payload;
    },

    setVisited: (state, { payload }) => {
      state.visited = payload;
    },

    clear: (state) => {
      state.visited = [];
      state.currentPoint = null;
      state.wall = [];
    },

    setStartPoint: (state, { payload }) => {
      state.startPoint = payload;
    },

    setFinishPoint: (state, { payload }) => {
      state.finishPoint = payload;
    },

    setWallPoint: (state, { payload }) => {
      state.wall.push(payload);
    },
  },
});

export const {
  setMode, setVisited, clear, setStartPoint, setFinishPoint, setWallPoint
} = pathSlice.actions;

export const pathSelector = state => state.path;

export default pathSlice.reducer;