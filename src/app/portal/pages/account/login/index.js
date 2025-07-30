// Portal css
import "../../../embed/style/main.css";
// React Files
import { Link } from "react-router-dom";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Login web page configuration
import { pageFormLayout, pageFormButton } from "../../../embed/pageConfiguration/account/login";
// Create an account / Register new account web page linkage title
import { pageURL as registerNewAccountSlug, pageLinkageTitle as registerNewAccountLinkageTitle } from "../../../embed/pageConfiguration/account/registerNewAccount";
// Forgot password web page linkage title
import { pageURL as forgotPasswordSlug, pageLinkageTitle as forgotPasswordPageLinkageTitle } from "../../../embed/pageConfiguration/account/forgotPassword";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";

const Login = () => {

    // Brand information
    const { message } = brandConfiguration;

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of login and current portal
    const { login, currentPortal } = state; 

    return (
        
        <section className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="d-flex flex-column gap-4 bg-white p-3 p-md-5 max-width-550px">
                        <div className="alert alert-info">
                            <p className="mb-2">{message.form.fieldRequired.en()}</p>
                            <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                        </div>
                        <form method="POST">
                            <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>
                        </form>
                        <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                            <Link to={`/${currentPortal}/${registerNewAccountSlug}/`} className="link">{`${registerNewAccountLinkageTitle.en} / ${registerNewAccountLinkageTitle.guj}`}</Link>
                            <Link to={`/${currentPortal}/${forgotPasswordSlug}/`} className="link">{`${forgotPasswordPageLinkageTitle.en} / ${forgotPasswordPageLinkageTitle.guj}`}</Link>
                        </div>
                    </div>
                    
                </div>
                <footer className="text-white">
                    <p className="small text-center mb-0">&copy; 2025</p>
                </footer>  
            </div>
        </section>
    )

}

export default Login;