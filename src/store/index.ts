import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import rootReducer from "./features";

const store = configureStore({
  reducer: rootReducer,
  // middleware默认就是thunk。使用thunk的话下面可以不写，可以自定义
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(reduxLogger);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
