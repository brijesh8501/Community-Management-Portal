import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from '../../state/globalContext';
import Home from './pages/home';


const Website = () => {

    // State dispatch
    const { dispatch } = useGlobalContext();

    // Use a ref to ensure the initial state loading only happens once per mount of Website
    const isInitialLoad = useRef(true);

    // Load the initial state
    useEffect(() => {

        // Check if the initial state has been loaded
        if (isInitialLoad.current) {

            // Load the initial state
            const loadWebsiteInitialState = async () => {
                
                try {
                    
                    // Load website state
                    const { default: websiteState } = await import('../../state/store/websiteStore'); // Adjust path
                    dispatch({ type: 'INITIALIZE_WEBSITE_STATE', payload: websiteState });

                } catch (error) {

                    // Log the error
                    console.error('Failed to load website initial state:', error);
                }
            };

            // Call the function to load the initial state
            loadWebsiteInitialState();

            // Set the initial state to false
            isInitialLoad.current = false;
        }
    }, [dispatch]);

    // Return the routes
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    );

}

export default Website;