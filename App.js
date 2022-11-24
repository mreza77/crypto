import React from 'react';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./src/Redux/store";
import DashboardScreen from './src/Screens/DashboardScreen';

const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DashboardScreen></DashboardScreen>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

