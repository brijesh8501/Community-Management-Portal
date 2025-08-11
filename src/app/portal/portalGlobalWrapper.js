// Header
import Header from "./include/header";
// Footer
import Footer from "./include/footer";


// Portal pages wrapper
const GlobalWrapper = ({ children }) => {

    return (
        <>
        <Header />
        <a class="visually-hidden-focusable" href="#main">Skip to main content</a>
        <main id="main" className="portal-wrapper body-wrapper">
            { children }
        </main>
        <Footer />
        </>
    )
}

export default GlobalWrapper;