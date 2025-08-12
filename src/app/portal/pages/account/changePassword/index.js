// Portal css
import "../../../embed/style/main.css";
// React Files
import { Link } from "react-router-dom";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Page wrapper of account module
import PageWrapper from "../pageWrapper";
// Change password web page configuration 
import { pageFormLayout, pageFormButton } from "./pageConfig";
// Login web page linkage title
import { pageURL as loginSlug, pageLinkageTitle as loginPageLinkageTitle } from "../login/pageConfig";
// Forgot password web page linkage title
import { pageURL as forgotPasswordSlug, pageLinkageTitle as forgotPasswordPageLinkageTitle } from "../forgotPassword/pageConfig";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";

const ChangePassword = () => {

    // Brand information
    const { message } = brandConfiguration;

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of change password and current portal
    const { changePassword, currentPortal } = state; 

    return (
        // Page wrapper of account module callout --start-- */
        <PageWrapper>
            <div className="d-flex flex-column gap-4 py-5 px-3 px-sm-4 p-xxl-5 max-width-550px" id="form-wrapper">
                <div className="alert alert-info">
                    <p className="mb-1">{message.form.fieldRequired.en()}</p>
                    <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                </div>
                <form autoComplete="off" method="POST">
                    <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                </form>
                <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                    <Link to={`/${currentPortal}/${loginSlug}/`} className="link">{`${loginPageLinkageTitle.en} / ${loginPageLinkageTitle.guj}`}</Link>
                    <Link to={`/${currentPortal}/${forgotPasswordSlug}/`} className="link">{`${forgotPasswordPageLinkageTitle.en} / ${forgotPasswordPageLinkageTitle.guj}`}</Link>
                </div>
            </div> 
        </PageWrapper>
        // Page wrapper of account module callout --end-- */
    )

}

export default ChangePassword;