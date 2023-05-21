import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedReducer } from "./persist-config";
import { userApi } from "./api/user.api";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { surveyApi } from "./api/survey.api";

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
    [surveyApi.reducerPath]: surveyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware, surveyApi.middleware)
      .concat(errorHandler),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
