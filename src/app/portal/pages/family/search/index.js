// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Page wrapper of account module
import GlobalWrapper from "../../../portalGlobalWrapper";
// Create form layout component
import FormLayout from "../../../../../components/form/formLayout";
// Page meta information
import { familySearchPageMeta  } from "../../../embed/pageMeta";
// Page configuration of family search
import { pageFormLayout, pageFormButton } from "./pageConfig";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";
// Pagination table component
import PaginateTable from "../../../../../components/paginateTable";

const FamilySearch = () => {

    // Brand information
    const { message } = brandConfiguration;

    // Page section meta information
    const { pageSubSection } = familySearchPageMeta;
    const { familyMemberList } = pageSubSection;

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
                        <div className="alert alert-info">
                            <p className="mb-1">{message.form.fieldRequired.en()}</p>
                            <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                        </div>
                        <form autoComplete="off" method="POST">
                            <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                        </form>
                        <PaginateTable tableHeadline={familyMemberList.label} />
                    </div>
                </section>
            </div>
        </GlobalWrapper>
    )


}

export default FamilySearch;