import { persistReducer } from "redux-persist";
import { userData } from "./reducers/user-data.reducer";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "role", "isProfile"],
};

export const persistedReducer = persistReducer(
  userPersistConfig,
  userData.reducer
);
