import GlobalWrapper from "../../../portalGlobalWrapper";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";
// Register new account / Create new account web page configuration
import { pageTitle as profileTitle, pageFormLayout, pageFormButton } from "./pageConfig";


const Profile = () => {

    // Brand information
    const { message } = brandConfiguration;
    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of register new account and current portal
    const { registerNewAccount, currentPortal } = state; 

    // Page headline style
    const pageHeadLineStyle = { 
        label: {
            class: "text-dark"
        },
        hrLine: {
            class: "bg-dark"
        } 
    };

    return (
        <GlobalWrapper>
        <section className="container section-wrapper">
            <div className="d-flex flex-column gap-4 py-5 px-3 px-sm-4 p-xxl-5" id="form-wrapper">
                <HeadLine title={profileTitle} style={ pageHeadLineStyle }/>
                <div className="alert alert-info">
                    <p className="mb-1">{message.form.fieldRequired.en()}</p>
                    <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                </div>
                <form autoComplete="off" method="POST">
                    <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                </form>
            </div>  
        </section>
        </GlobalWrapper>
    )

}

export default Profile;