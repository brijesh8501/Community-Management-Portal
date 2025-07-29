// App.js
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Lazily load your main portal components
// This is a lazy loading technique to improve the performance of the app
// It loads the portal and website components only when they are needed
// This is a good practice to avoid loading unnecessary components
const Portal = React.lazy(() => import('./app/portal'));
const Website = React.lazy(() => import('./app/website'));

function App() {

  // Return the routes
  return (

    // Suspense is used to show skeleton animation while the app is loading
    // Routes is used to define the routes for the app
    // Route is used to define the route for the app
    <Suspense fallback={<div class="skeleton-wrapper vw-100 vh-100"><div class="skeleton-image mh-100"></div></div>}>
      <Routes>
        <Route path="/*" element={<Website />} />
        <Route path="/portal/*" element={<Portal />} />
      </Routes>
    </Suspense>
  );
}

export default App;