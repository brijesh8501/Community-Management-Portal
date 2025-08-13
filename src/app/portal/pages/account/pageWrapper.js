const PageWrapper = ( {children} ) => {

    return (
        <main className="main-style-not-required peacock-gradient-bg">
            <div className="container min-vh-100 body-wrapper d-flex gap-5 flex-column justify-content-between align-items-stretch">
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