// state/reducer.js
const Reducer = (state, action) => {
    switch (action.type) {

        // Action to initialize portal state
        case 'INITIALIZE_PORTAL_STATE':
            return {
                currentPortal: 'portal',
                ...action.payload // reset the state with the portal state
            };

        // Action to initialize website state
        case 'INITIALIZE_WEBSITE_STATE':
            return {
                currentPortal: 'website',
                ...action.payload // reset the state with the website state
            };
            
        // Action to update current portal
        case 'SET_CURRENT_PORTAL':
            return { ...state, currentPortal: action.payload }; // update the current portal

        // Default case
        default:
            return state;
    }
};

export default Reducer;