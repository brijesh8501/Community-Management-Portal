import { useEffect, useRef } from 'react';
import { Offcanvas } from 'bootstrap';

const NavBar = ( { children, isOffcanvasOpen, setIsOffcanvasOpen } ) => {
    // useRef to store a mutable value that doesn't cause a re-render
    const offcanvasRef = useRef(null);

    // useEffect hook for a cleaner lifecycle management
    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
        if (!offcanvasElement) return;

        // Get or create the Bootstrap offcanvas instance
        const bsOffcanvas = Offcanvas.getOrCreateInstance(offcanvasElement);
        offcanvasRef.current = bsOffcanvas;

        // Event handler to synchronize React state with Bootstrap's native closing
        const handleOffcanvasHidden = () => {
            // Update state to false when the offcanvas is hidden by any means (e.g., backdrop click)
            setIsOffcanvasOpen(false);
        };

        // Add the event listener when the component mounts
        offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);

        // Cleanup function: remove the event listener when the component unmounts
        return () => {
            offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);
            // Optionally, you can also destroy the Bootstrap instance here, but it's not strictly necessary in this case.
            // offcanvasRef.current.dispose();
        };
    }, []); // Empty dependency array means this runs only once on mount

    // Another useEffect to control the offcanvas visibility based on state changes
    useEffect(() => {
        if (offcanvasRef.current) {
            if (isOffcanvasOpen) {
                offcanvasRef.current.show();
            } else {
                offcanvasRef.current.hide();
            }
        }
    }, [isOffcanvasOpen]);

    // This function will be called by the button click
    const handleToggle = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <nav className="navbar navbar-light bg-white fixed-top">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={handleToggle}
                    aria-controls="offcanvasDarkNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
                <div 
                    className="offcanvas offcanvas-start"
                    tabIndex="-1" 
                    id="offcanvasDarkNavbar" 
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Brand</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={handleToggle}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        {children}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;