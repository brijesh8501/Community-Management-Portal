import GlobalWrapper from "../../../portalGlobalWrapper";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";
// Create form layout component
import FormLayout from "../../../../../components/form/formLayout";
// Page meta information
import { profilePageMeta  } from "../../../embed/pageMeta";
// Register new account / Create new account web page configuration
import { pageFormLayout, pageFormButton } from "./pageConfig";


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
        <div className="container">
            <section className="section-wrapper">
                <div className="d-flex flex-column gap-4 py-5 px-3 px-sm-4 p-xxl-5">
                    <HeadLine title={profilePageMeta.label} style={ pageHeadLineStyle }/>
                    <div className="alert alert-info">
                        <p className="mb-1">{message.form.fieldRequired.en()}</p>
                        <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                    </div>
                    <form autoComplete="off" method="POST">
                        <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                    </form>
                </div>  
            </section>
        </div>
        </GlobalWrapper>
    )

}

export default Profile;