import { Link } from "react-router";
import { BRANDING, NAVBAR_ITEMS } from "../../config/branding";

export function Navbar() {

    // Navbar items
    const navBarItemList = NAVBAR_ITEMS;

    return (
        <>
        {/* Top navbar -start */}
        <nav className="navbar navbar-light bg-light shadow px-3">
            <div className="container-fluid">
                {/* Brand Name */}
                <Link 
                    className="navbar-brand fw-bold" 
                    to="#"
                >
                    <img src={BRANDING.logo.main} alt={BRANDING.projectName} className="navbar-logo" />
                </Link>
                {/* Hamburger Toggle Button that triggers the Offcanvas */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebarOffcanvas"
                    aria-controls="sidebarOffcanvas"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        {/* Top navbar -end */}
        {/* Offcanvas sidebar -start */}
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="sidebarOffcanvas"
            aria-labelledby="sidebarOffcanvasLabel"
        >
            <div className="offcanvas-header border-bottom border-secondary">
            <h5 className="offcanvas-title fw-bold" id="sidebarOffcanvasLabel">
                Navigation
            </h5>
            {/* Close button for the sidebar */}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>
            </div>

            <div className="offcanvas-body">
            <ul className="navbar-nav fs-5">
                {navBarItemList.map((item, index) => (
                <li className="nav-item mb-2" key={index}>
                    <Link
                        className="nav-link d-flex justify-content-between align-items-center py-2 px-3 rounded"
                        to={item.path}
                    >
                    <span>{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                        <span className="badge bg-danger rounded-pill">
                            {item.badge}
                        </span>
                    )}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
        {/* Offcanvas sidebar -end */}
        </>
    )
}