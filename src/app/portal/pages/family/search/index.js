// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Page wrapper of account module
import GlobalWrapper from "../../../portalGlobalWrapper";
// Create form layout component
import FormLayout from "../../../../../components/form/layout";
// Page meta information
import { familySearchPageMeta  } from "../../../embed/pageMeta";
// Page configuraion of family search
import { pageFormLayout, pageFormButton } from "./pageConfig";
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
                <section className="section-wrapper p-5" id="family-tree-section">
                    <div className="d-flex flex-column gap-4">
                        <HeadLine title={familySearchPageMeta.label} style={ pageHeadLineStyle } />
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