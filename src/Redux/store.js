import {
   combineReducers,
   configureStore,
   getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CryptoReducer from "./reducers/CryptoReducer";


const persistConfig = {
   key: "root",
   storage: AsyncStorage,
};

const rootReducer = combineReducers({
   crypto: CryptoReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
});

export const persistor = persistStore(store);

export default store;
