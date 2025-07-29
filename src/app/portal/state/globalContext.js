import React, { createContext, useReducer, useContext, useEffect, useRef } from 'react';
import Reducer from './reducer'; // Your main reducer

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    // Initialize the reducer with an initial state structure that can hold either portal or website data at a time
    // The initial state for website/portal specific data is empty
    const initialGlobalState = {};

    // useReducer is called ONLY ONCE when GlobalProvider mounts
    const [state, dispatch] = useReducer(Reducer, initialGlobalState);

    // Return the GlobalContext.Provider
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);