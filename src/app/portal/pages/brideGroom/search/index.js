// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// Create form layout component
import FormLayout from "../../../../../components/form/formLayout";
// Page wrapper of account module
import GlobalWrapper from "../../../portalGlobalWrapper";
// Page meta information
import { brideGroomSearchPageMeta  } from "../../../embed/pageMeta";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";
// Page configuraion of family search
import { pageFormLayout, pageFormButton } from "./pageConfig";
// Pagination table component
import PaginateTable from "../../../../../components/paginateTable";

const BrideGroomSearch = () => {

    // Brand information
    const { message } = brandConfiguration;

    // Page section meta information
    const { pageSubSection } = brideGroomSearchPageMeta;
    const { brideGroomList } = pageSubSection;

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
                        <HeadLine title={brideGroomSearchPageMeta.label} style={ pageHeadLineStyle } />
                        <div className="alert alert-info">
                            <p className="mb-1">{message.form.fieldRequired.en()}</p>
                            <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                        </div>
                        <form autoComplete="off" method="POST">
                            <FormLayout pageFormLayout={pageFormLayout} pageFormButton={pageFormButton}/>  
                        </form>
                        <PaginateTable tableHeadline={brideGroomList.label} />
                    </div>
                </section>
            </div>
        </GlobalWrapper>
    )


}

export default BrideGroomSearch;