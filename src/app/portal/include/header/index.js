import '../../embed/style/main.css';
// React Files
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
// State global context call out
import { useGlobalContext } from "../../state/globalContext";
import NavBar from './navBar'; 

const Header = () => {

    // State
    const { state } = useGlobalContext();

    // Get state of current portal
    const { currentPortal } = state; 

    // State to control the offcanvas visibility
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    // This function will be called when a Link is clicked
    const closeOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };

    return (
        <header>
            <NavBar 
                isOffcanvasOpen={isOffcanvasOpen}
                setIsOffcanvasOpen={setIsOffcanvasOpen}
            >
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link 
                            to={`/${currentPortal}/`}
                            className="nav-link active"
                            onClick={closeOffcanvas}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to={`/${currentPortal}/profile/`}
                            className="nav-link"
                            onClick={closeOffcanvas}
                        >
                            Link
                        </Link>
                    </li>
                </ul>
            </NavBar>
        </header>
    );
};

export default Header;