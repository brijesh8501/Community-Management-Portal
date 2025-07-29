import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from './state/globalContext';
import Login from './pages/account/login';
import RegisterNewAccount from './pages/account/registerNewAccount';
import ChangePassword from './pages/account/changePassword';
import ForgotPassword from './pages/account/forgotPassword';
import Dashboard from './pages/dashboard';


const Navigate = () => {

    // State dispatch
    const { dispatch } = useGlobalContext();

    // Use a ref to ensure the initial state loading only happens once per mount of Portal
    const isInitialLoad = useRef(true);

    useEffect(() => {

        // Check if the initial state has been loaded
        if (isInitialLoad.current) {

            // Load the initial state
            const loadPortalInitialState = async () => {
                try {

                    // Load portal state
                    const { default: portalState } = await import('./state/store'); // Adjust path
                    dispatch({ type: 'INITIALIZE_PORTAL_STATE', payload: portalState });
                    
                } catch (error) {

                    // Log the error
                    console.error('Failed to load portal initial state:', error);
                }
            };

            // Call the function to load the initial state 
            loadPortalInitialState();

            // Set the initial state to false
            isInitialLoad.current = false;
        }
    }, [dispatch]);

    // Return the routes
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register/" element={<RegisterNewAccount />} />
            <Route path="/change-password/" element={<ChangePassword />} />
            <Route path="/forgot-password/" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );

}

export default Navigate;