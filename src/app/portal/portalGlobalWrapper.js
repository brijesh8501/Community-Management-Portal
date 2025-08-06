// Header
import Header from "./include/header";
// Footer
import Footer from "./include/footer";


// Portal pages wrapper
const GlobalWrapper = ({ children }) => {

    return (
        <>
        <Header />
        <main className="min-vh-100">
            { children }
        </main>
        <Footer />
        </>
    )
}

export default GlobalWrapper;