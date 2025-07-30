// Portal css
import "../../../embed/style/main.css";
// React Files
import { Link } from "react-router-dom";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Register new account / Create new account web page configuration
import { pageTitle as registerNewAccountTitle, pageFormLayout, pageFormButton } from "../../../embed/pageConfiguration/account/registerNewAccount";
// Login web page linkage title
import { pageURL as loginSlug, pageLinkageTitle as loginPageLinkageTitle } from "../../../embed/pageConfiguration/account/login";
// Forgot password web page linkage title
import { pageURL as forgotPasswordSlug, pageLinkageTitle as forgotPasswordPageLinkageTitle } from "../../../embed/pageConfiguration/account/forgotPassword";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Create form field component
import FormLayout from "../../../../../components/form/layout";

const RegisterNewAccount = () => {

    // Brand information
    const { message } = brandConfiguration;
    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of register new account and current portal
    const { registerNewAccount, currentPortal } = state; 
  
    return (
        
        <section className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex gap-5 flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="d-flex flex-column gap-4 bg-white p-5 max-width-650px">
                        <h1 className="d-flex flex-column gap-2 justify-conten-center align-items-center h4 text-center">
                            <div>{`${registerNewAccountTitle.en}`}</div>
                            <div>{`${registerNewAccountTitle.guj}`}</div>
                        </h1>
                        <div className="alert alert-info">
                            <p className="mb-1">{message.form.fieldRequired.en()}</p>
                            <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                        </div>
                        <form method="POST">
                            <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>
                            
                        </form>
                        <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                            <Link to={`/${currentPortal}/${loginSlug}/`} className="link">{`${loginPageLinkageTitle.en} / ${loginPageLinkageTitle .guj}`}</Link>
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

export default RegisterNewAccount;