// React Files
import { Link } from "react-router-dom";
// State global context call out
import { useGlobalContext } from "../../state/globalContext";
// Page wrapper of account module
import GlobalWrapper from "../../portalGlobalWrapper";
// Permalink
import permaLink from '../../../../components/helper/permaLink';
// Page meta information
import { 
    dashboardModuleMeta, 
    familyHistoryPageMeta, 
    familyMemberEditPageMeta  
} from "../../embed/pageMeta";
// Page headline component
import HeadLine from "../../../../components/pageHeadLine";


const Dashboard = () => {

    // State
    const { state } = useGlobalContext();

    // Get state of current portal
    const { currentPortal } = state; 

    // Page section meta information
    const { pageSubSection } = familyHistoryPageMeta;
    const { familyTree } = pageSubSection;

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
                <h1 className="visually-hidden">{`${dashboardModuleMeta.label.en} / ${dashboardModuleMeta.label.guj}`}</h1>
                <section className="section-wrapper p-5" id="family-tree-section">
                    <HeadLine title={familyTree.label} style={ pageHeadLineStyle } headTag="h2" />
                    <div>
                        <div className="d-flex justify-content-center align-items-center my-5" id="family-tree-image">
                            <img src={`${process.env.PUBLIC_URL}/assets/family/matrix.webp`} alt="Matrix" className="img-fluid" />
                        </div>
                        <div className="d-flex gap-3 justify-content-end align-items-center" id="family-tree-action-wrapper">
                            <Link
                                to={ permaLink([
                                        currentPortal,
                                        familyMemberEditPageMeta.pageRoute,
                                        familyMemberEditPageMeta.pageSlug
                                ]) }
                                className="text-dark"
                            >
                                {`${familyTree.linkageLabel.en} / ${familyTree.linkageLabel.guj}`}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </GlobalWrapper>
    )

}

export default Dashboard;