// React Files
import { Link } from "react-router-dom";
// Portal css
import "../../../embed/style/main.css";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Page wrapper of account module
import PageWrapper from "../pageWrapper";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";
// Page meta information
import { loginPageMeta, registerPageMeta  } from "../../../embed/pageMeta";
// Forgot password web page configuration
import { pageFormLayout, pageFormButton } from "./pageConfig";

const ForgotPassword = () => {

    // Brand information
    const { message } = brandConfiguration;

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of forgot password and current portal
    const { forgotPassword, currentPortal } = state; 

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
                    <Link to={`/${currentPortal}/${loginPageMeta.pageSlug}/`} className="link">{`${loginPageMeta.linkageLabel.en} / ${loginPageMeta.linkageLabel.guj}`}</Link>
                    <Link to={`/${currentPortal}/${registerPageMeta.pageSlug}/`} className="link">{`${registerPageMeta.linkageLabel.en} / ${registerPageMeta.linkageLabel.guj}`}</Link>
                </div>
            </div>
        </PageWrapper>
        // Page wrapper of account module callout --end-- */
    )

}

export default ForgotPassword;