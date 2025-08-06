// Configuration of 404 page
import pageConfiguration from "./embed/pageConfiguration";
// Component of page headline
import HeadLine from "../components/pageHeadLine";

const PageNotFound = () => {

    // Title, description and nabigation anchor link
    const { title, description, navigateLink } = pageConfiguration;
    // Home page navigation link
    const homePageLink = navigateLink.homePage;
    // Page headline style
    const pageHeadLineStyle = { 
        label: {
            class: "danger-color"
        },
        hrLine: {
            class: "danger-bg"
        } 
    };

    return (
        <section id="section-wrapper">
            <div className="container min-vh-100 d-flex flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="alert alert-danger text-center py-5">
                        <div className="display-1 text-center">⚠</div>
                        <HeadLine title={title} style={pageHeadLineStyle} />
                        <p className="text-center mb-2">{description.en}</p>
                        <p>{description.guj}</p>
                        <a href={homePageLink.url} className={homePageLink.class}>{`${homePageLink.label.en} / ${homePageLink.label.guj}`}</a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PageNotFound;