// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Page wrapper of account module
import GlobalWrapper from "../../../portalGlobalWrapper";
// Page configuraion of family search
import { pageTitle, pageFormLayout, pageFormButton } from "./pageConfig";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";

const FamilySearch = () => {

    // Brand information
    const { message } = brandConfiguration;

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
                <section className="dashboard-section section-wrapper p-5" id="family-tree-section">
                    <div className="d-flex flex-column gap-4">
                        <HeadLine title={pageTitle} style={ pageHeadLineStyle } />
                        <form autoComplete="off" method="POST">
                            <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                        </form>
                    </div>
                </section>
            </div>
        </GlobalWrapper>
    )


}

export default FamilySearch;