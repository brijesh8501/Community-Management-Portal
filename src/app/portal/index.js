import React from 'react';
import { GlobalProvider } from './state/globalContext'; // Global provider
import Navigate from './navigate'; // move logic here

const Portal = () => (
  <GlobalProvider>
    <Navigate />
  </GlobalProvider>
);

export default Portal;
