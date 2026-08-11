import { BRANDING } from "../../config/branding";

export function Login() {

    return (<>
        <div className="container-fluid vh-100">
            <div className="row h-100">
                <div className="col-12 col-lg-6 h-100">
                    <div id="loginFormWrapper">
                        <form method="post">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-6 bg-dark text-light">
                    <div className="description-wrapper d-flex flex-column justify-content-between h-100 p-5">
                        <div className="description-header">
                            <div className="d-flex justify-content-end align-items-center">
                                <img src={BRANDING.logo.main} alt={BRANDING.clientName} className="img-fluid" width="300" />
                            </div>
                        </div>
                        <div className="description-body w-xsm-100 w-xl-90 w-xxl-50 mx-auto">
                            <p className="display-5 mb-5">Welcome to the <br className="d-none d-xxl-block"/><b>RealSale</b> system</p>
                        </div>
                        <div className="description-footer">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p className="mb-0"><b className="text-secondary">Powered by</b> Impact North</p>
                                    <p className="mb-0"><b className="text-secondary">&</b> Real Estate Builder Software Tools</p>
                                </div>
                                <div>
                                    <p className="mb-0"><b className="text-secondary">Privacy Policy</b></p>
                                    <p>&copy; Copyright {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);

}