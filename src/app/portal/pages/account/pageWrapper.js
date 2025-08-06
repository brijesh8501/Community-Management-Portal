// React Files
import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const PageWrapper = ( {children} ) => {

    return (
        <main className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex gap-5 flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    
                    {/* Children call out  --start-- */}
                    {children}
                    {/* Children call out  --end-- */}
                    
                </div>
                <footer className="text-white">
                    <p className="small text-center mb-0">&copy; 2025</p>
                </footer>  
            </div>
        </main>
    );

}

export default PageWrapper;