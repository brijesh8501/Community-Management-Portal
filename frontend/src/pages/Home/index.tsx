import { BRANDING } from "../../config/branding";

export function Home() {
    return (
        <div className="row justify-content-center">
            <div className="col-auto text-center mt-5">
                <div className="alert alert-info" role="alert">
                    <h1 className="fw-bold">Welcome to the {BRANDING.clientName} <br className="d-none d-sm-block"/>{BRANDING.projectName}</h1>
                </div>
            </div>
        </div>
    );
}