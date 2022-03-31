import { configureStore } from "@reduxjs/toolkit";
import { colorSlice } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    [colorSlice.reducerPath]: colorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
