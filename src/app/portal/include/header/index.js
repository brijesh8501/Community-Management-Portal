import '../../embed/style/main.css';
// React Files
import { Link, useLocation } from "react-router-dom";
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

    // Get current page URL
    const currentURL = useLocation();

    // Get current web page
    const currentURLPathSegments = currentURL.pathname.split("/").filter(Boolean);

    // URL segment 1
    const currentURLPageSegment1 = currentURLPathSegments[currentURLPathSegments.length - 2];
    
    // URL segment 2
    const currentURLPageSegment2 = currentURLPathSegments[currentURLPathSegments.length - 1];

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
                            
                            // Href tag URL / link
                            const anchorLink = `/${currentPortal}/${ (item.link !== "/")? `${item.link}/` : " " }`;
                          
                            // Href tag acitve class
                            const anchorLinkClass = `${ ( 
                                    ( 
                                        ( currentURLPageSegment1 && currentURLPageSegment1 === item.link )  
                                            || 
                                        ( currentURLPageSegment2 && currentURLPageSegment2 === item.link ) 
                                    )
                                        || 
                                    ( 
                                        ( !currentURLPageSegment2 && currentURLPageSegment1 && currentURLPageSegment1 === currentPortal && item.link === "/" ) 
                                            || 
                                        ( !currentURLPageSegment1 && currentURLPageSegment2 && currentURLPageSegment2 === currentPortal && item.link === "/" )
                                    ) 
                                )? 
                                    "active" : "" 
                                }`;
                            
                            return ((item.options)?

                                    // Offcanvas dropdown navigation from sidebar
                                    <li className="nav-item dropdown">
                                        <Link
                                            to="#"
                                            className={`nav-link dropdown-toggle ${ (anchorLinkClass) && `${anchorLinkClass} show` }`} 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded={`${ (anchorLinkClass)? "true" : "false" }`}
                                        >
                                            {`${item.label.en} / ${item.label.guj}`}
                                        </Link>
                                        <ul className={`dropdown-menu ${ (anchorLinkClass) && "show" }`} aria-labelledby="navbarDropdown">
                                            {
                                                item.options.map( ( innerItem, innerI) => {

                                                    const anchorDropdownLinkClass = `${( 
                                                            ( currentURLPageSegment1 === item.link && currentURLPageSegment2 === innerItem.link) 
                                                                || 
                                                            ( currentURLPageSegment1 === currentPortal && innerItem.link === "/" ) 
                                                        ) && 
                                                            "active" 
                                                        }`;

                                                    return (<li>
                                                        <Link 
                                                            to={`${anchorLink}${innerItem.link}/`}
                                                            className={`dropdown-item ${anchorDropdownLinkClass}`}
                                                        >
                                                            {`${innerItem.label.en} / ${innerItem.label.guj}`}
                                                        </Link>
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                    </li>

                                    :

                                    // Offcanavas simple navigation from sidebar
                                    <li className="nav-item" key={i}>
                                        <Link 
                                            to={anchorLink}
                                            className={`nav-link ${anchorLinkClass}`}
                                            onClick={closeOffcanvas}
                                        >
                                            <span className='d-flex gap-2 justify-content-start align-items-center'>
                                                {(item.icon) && <img src={item.icon} className="img-fluid profile-icon" />}{`${item.label.en} / ${item.label.guj}`}
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