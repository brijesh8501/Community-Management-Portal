// App.js
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './state/globalContext'; // Your global context
import './App.css';

// Lazily load your main portal components
// This is a lazy loading technique to improve the performance of the app
// It loads the portal and website components only when they are needed
// This is a good practice to avoid loading unnecessary components
const Portal = React.lazy(() => import('./app/portal/portal'));
const Website = React.lazy(() => import('./app/website/website'));

function App() {

  // Return the routes
  return (

    // GlobalProvider is used to provide the global state to the app
    // Suspense is used to show a loading message while the app is loading
    // Routes is used to define the routes for the app
    // Route is used to define the route for the app
      <GlobalProvider>
        <Suspense fallback={<div>Loading Application...</div>}>
          <Routes>
            <Route path="/portal/*" element={<Portal />} />
            <Route path="/*" element={<Website />} /> {/* Default to website */}
            {/* Add a 404/NotFound route if desired */}
            {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
          </Routes>
        </Suspense>
      </GlobalProvider>
  );
}

export default App;