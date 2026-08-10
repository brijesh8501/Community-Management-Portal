import { Outlet } from 'react-router';
import { Navbar } from "../../components/Navbar";

export function MainLayout(){

    return (
        <div className="bg-light min-vh-100">
            {/* The Navbar stays at the top of every page that uses this layout */}
            <Navbar/>

            {/* The main content area where pages will be injected */}
            <main className="container py-4">
                {/* React Router will render the current page right here */}
                <Outlet />
            </main>
        </div>
    )

}