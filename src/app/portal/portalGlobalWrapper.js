// Header
import Header from "./embed/header";
// Footer
import Footer from "./embed/footer";


// Portal pages wrapper
const GlobalWrapper = ({ children }) => {

    return (
        <>
        <Header />
        <a className="visually-hidden-focusable" href="#main">Skip to main content</a>
        <main id="main" className="portal-wrapper body-wrapper">
            { children }
        </main>
        <Footer />
        </>
    )
}

export default GlobalWrapper;