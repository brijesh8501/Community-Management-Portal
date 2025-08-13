// React Files
import { Link } from "react-router-dom";
// Portal css
import "../../../embed/style/main.css";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Page wrapper of account module
import PageWrapper from "../pageWrapper";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";

// Page meta information
import { loginPageMeta, forgotPasswordPageMeta  } from "../../../embed/pageMeta";
// Change password web page configuration 
import { pageFormLayout, pageFormButton } from "./pageConfig";

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
            <section className="section-wrapper d-flex flex-column gap-4 py-5 px-3 px-sm-4 p-xxl-5 max-width-550px">
                <div className="alert alert-info">
                    <p className="mb-1">{message.form.fieldRequired.en()}</p>
                    <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                </div>
                <form autoComplete="off" method="POST">
                    <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                </form>
                <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                    <Link to={`/${currentPortal}/${loginPageMeta.pageSlug}/`} className="link">{`${loginPageMeta.linkageLabel.en} / ${loginPageMeta.linkageLabel.guj}`}</Link>
                    <Link to={`/${currentPortal}/${forgotPasswordPageMeta.pageSlug}/`} className="link">{`${forgotPasswordPageMeta.linkageLabel.en} / ${forgotPasswordPageMeta.linkageLabel.guj}`}</Link>
                </div>
            </section> 
        </PageWrapper>
        // Page wrapper of account module callout --end-- */
    )

}

export default ChangePassword;