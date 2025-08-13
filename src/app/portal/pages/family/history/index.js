// React Files
import { Link } from "react-router-dom";
// Page wrapper of account module
import GlobalWrapper from "../../../portalGlobalWrapper";
// Page meta information
import { familySectionMeta  } from "../../../embed/pageMeta";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";


const FamilyHistory = () => {

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
                    <HeadLine title={familySectionMeta.label} style={ pageHeadLineStyle } />
                    <div>
                        <div className="d-flex justify-content-center align-items-center my-5" id="family-tree-image">
                            <img src={`${process.env.PUBLIC_URL}/assets/family/matrix.webp`} alt="Matrix" className="img-fluid" />
                        </div>
                        <div className="d-flex gap-3 justify-content-end align-items-center" id="family-tree-action-wrapper">
                            <Link
                                to="profile/"
                                className="text-dark"
                            >
                                Make changes to your family tree / તમારા કુટુંબ વૃક્ષમાં ફેરફાર કરો
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </GlobalWrapper>
    )

}

export default FamilyHistory;