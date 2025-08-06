// Portal css
import "../../../embed/style/main.css";
// React Files
import { Link } from "react-router-dom";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Forgot password web page configuration
import { pageFormLayout, pageFormButton } from "../../../embed/pageConfiguration/account/forgotPassword";
// Login web page linkage title
import { pageURL as loginSlug, pageLinkageTitle as loginPageLinkageTitle } from "../../../embed/pageConfiguration/account/login";
// Create an account / Register new account web page linkage title
import { pageURL as registerNewAccountlug, pageLinkageTitle as registerNewAccountLinkageTitle } from "../../../embed/pageConfiguration/account/registerNewAccount";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";

const ForgotPassword = () => {

    // Brand information
    const { message } = brandConfiguration;

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of forgot password and current portal
    const { forgotPassword, currentPortal } = state; 

    return (
        
        <section className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex gap-5 flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="d-flex flex-column gap-4 bg-white py-5 px-3 px-sm-4 p-xxl-5 max-width-550px" id="form-wrapper">
                        <div className="alert alert-info">
                            <p className="mb-1">{message.form.fieldRequired.en()}</p>
                            <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                        </div>
                        <form autocomplete="off" method="POST">
                            <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                        </form>
                        <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                            <Link to={`/${currentPortal}/${loginSlug}/`} className="link">{`${loginPageLinkageTitle.en} / ${loginPageLinkageTitle.guj}`}</Link>
                            <Link to={`/${currentPortal}/${registerNewAccountlug}/`} className="link">{`${registerNewAccountLinkageTitle.en} / ${registerNewAccountLinkageTitle.guj}`}</Link>
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

export default ForgotPassword;