// React Files
import { Link } from "react-router-dom";
// Portal css
import "../../../embed/style/main.css";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Permalink
import permaLink from '../../../../../components/helper/permaLink';
// Create form layout component
import FormLayout from "../../../../../components/form/layout";
// Page wrapper of account module
import PageWrapper from "../pageWrapper";
// Page meta information
import { forgotPasswordPageMeta, registerPageMeta  } from "../../../embed/pageMeta";
// Login web page configuration
import { pageFormLayout, pageFormButton } from "./pageConfig";

const Login = () => {

    // Brand information
    const { message } = brandConfiguration;

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of login and current portal
    const { login, currentPortal } = state; 

    return (
        // Page wrapper of account module callout --start-- */
        <PageWrapper>
            <section className="section-wrapper d-flex flex-column gap-4 py-5 px-3 px-sm-4 p-xxl-5 max-width-550px">
                <div className="alert alert-info">
                    <p className="mb-2">{message.form.fieldRequired.en()}</p>
                    <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                </div>
                <form autoComplete="off" method="POST">
                    <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>
                </form>
                <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                    <Link 
                        to={ permaLink([
                            currentPortal,
                            registerPageMeta.pageSlug
                        ]) }
                        className="link">
                            {`${registerPageMeta.linkageLabel.en} / ${registerPageMeta.linkageLabel.guj}`}
                    </Link>
                    <Link 
                        to={ permaLink([
                            currentPortal,
                            forgotPasswordPageMeta.pageSlug
                        ]) }
                        className="link">
                            {`${forgotPasswordPageMeta.linkageLabel.en} / ${forgotPasswordPageMeta.linkageLabel.guj}`}
                    </Link>
                </div>
            </section>
        </PageWrapper>
        // Page wrapper of account module callout --end-- */
    )

}

export default Login;