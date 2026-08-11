import { Outlet } from 'react-router';

export function NonSessionLayout(){

    return (
        <div>

            {/* The main content area where pages will be injected */}
            <main>
                {/* React Router will render the current page right here */}
                <Outlet />
            </main>
        </div>
    )

}