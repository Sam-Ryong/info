import { configureStore, createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setInit(state, action) {
      return action.payload; // action.payload를 상태로 설정
    },
  },
});

export default configureStore({
  reducer: {
    posts: posts.reducer,
  },
});

export let { setInit } = posts.actions;
