// Branding
import { BRANDING } from "../../config/branding";

// Login
import { LOGIN_CONFIG } from "../../config/pages/login";

export function Login() {

    // Branding
    const { logo } = BRANDING;
    const { clientLogo, systemLogo, featuredCommunityLogo } = logo;

    // Login form configuration
    const { formFields } = LOGIN_CONFIG;

    return (<>
        <div className="container-fluid vh-100" id="login">
            <div className="row h-100">
                <div className="col-12 col-lg-6 h-100">
                    <div className="block-wrapper d-flex flex-column justify-content-between h-100 p-5" id="blockLeftWrapper">
                        <div className="block-header">
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src={featuredCommunityLogo.main.path} 
                                    alt={featuredCommunityLogo.main.alt} 
                                    className="img-fluid" width="250" 
                                />
                            </div>
                        </div>
                        <div className="block-body">
                            <div className="d-flex flex-column gap-5" id="loginFormWrapper">                             
                                <form method="post" id="loginForm" className="mt-5 w-xsm-100 w-sm-80 w-md-50 w-lg-70 w-xl-60 w-xxl-50 mx-auto">
                                    <div>
                                        <label className="form-label" htmlFor={formFields.email.key}>Email {(formFields.email.required) && <span className="text-danger">*</span>}</label>
                                        <input 
                                            type="email" 
                                            className="form-control bg-silver rounded-0 border-top-0 border-start-0 border-end-0" 
                                            id={formFields.email.key} 
                                            name={formFields.email.key} 
                                            placeholder={formFields.email.placeholder} 
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label" htmlFor={formFields.password.key}>Password {(formFields.password.required) && <span className="text-danger">*</span>}</label>
                                        <input 
                                            type="password" 
                                            className="form-control bg-silver rounded-0 border-top-0 border-start-0 border-end-0" 
                                            id={formFields.password.key} 
                                            name={formFields.password.key} 
                                            placeholder={formFields.password.placeholder} 
                                        />
                                    </div>
                                    <div className="mt-4 form-action-group d-flex justify-content-center align-items-center">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="block-footer">
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src={clientLogo.main.path} 
                                    alt={clientLogo.main.alt} 
                                    className="img-fluid" width="200" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 bg-dark text-light">
                    <div className="block-wrapper d-flex flex-column justify-content-between h-100 p-5" id="blockRightWrapper">
                        <div className="block-header">
                            <div className="d-flex justify-content-end align-items-center">
                                <img src={BRANDING.logo.systemLogo.secondary.path} alt={BRANDING.logo.systemLogo.secondary.alt} className="img-fluid" width="150" />
                            </div>
                        </div>
                        <div className="block-body w-xsm-100 w-xl-90 w-xxl-50 mx-auto d-flex justify-content-center align-items-center parent-container">
                            <p 
                                className="scalable-text mb-5"
                                style={
                                    {
                                        "--min-size": "24px",
                                        "--scale-factor": "12",
                                        "--max-size": "48px",
                                    } as React.CSSProperties
                                }
                            >Welcome to the <br/><span className="fw-bold text-gray">RealSale</span> system</p>
                        </div>
                        <div className="block-footer">
                            <div className="d-flex justify-content-between align-items-center small">
                                <div>
                                    <p className="mb-0"><span className="fw-bold text-gray">Powered by</span> Impact North</p>
                                    <p className="mb-0"><span className="fw-bold text-gray">&</span> Real Estate Builder Software Tools</p>
                                </div>
                                <div>
                                    <p className="mb-0"><span className="fw-bold text-gray">Privacy Policy</span></p>
                                    <p className="mb-0"><span className="fw-bold text-gray">&copy; Copyright {new Date().getFullYear()}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);

}