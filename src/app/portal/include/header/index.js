import '../../embed/style/main.css';
// React Files
import { Link } from "react-router-dom";
import { useState } from 'react';
// State global context call out
import { useGlobalContext } from "../../state/globalContext";
// Page Configuration of header
import { headerConfig } from "./pageConfig";
// Components
import NavBar from './navBar'; 

const Header = () => {

    // State
    const { state } = useGlobalContext();

    // Get state of current portal
    const { currentPortal } = state; 
   
    // Header page configuration
    const { navBar } = headerConfig;
  
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
                <ul className="navbar-nav">
                    {
                        navBar.map( (item, i) => {

                            return (
                                <li className="nav-item">
                                    <Link 
                                        to={`/${currentPortal}${item.link}`}
                                        className="nav-link active"
                                        onClick={closeOffcanvas}
                                    >
                                        <span className='d-flex gap-2 justify-content-start align-items-center'>
                                            {(item.icon)? <img src={item.icon} className="img-fluid profile-icon" /> : "" }{`${item.label.en} / ${item.label.guj}`}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </NavBar>
        </header>
    );
};

export default Header;