import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './index.css';
import App from './App';

// Make Bootstrap available globally
window.bootstrap = bootstrap;

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(

  // React.StrictMode is used to detect any potential problems with the app
  // BrowserRouter is used to handle the routing for the app
  // App is the main component of the app which is the root component of the app
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);