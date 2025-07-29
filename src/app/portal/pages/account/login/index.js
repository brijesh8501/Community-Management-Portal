import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../../state/globalContext";
import '../../../layout/style/main.css';
import FormField from "../../../../components/form/formField";

const Login = () => {

    // State
    const { state, dispatch } = useGlobalContext();
    const { login, currentPortal } = state; 
    console.log("1");
    return (
        
        <section className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="silver-light-bg p-5 max-width-550px">
                        <div className="alert alert-info my-4">
                            <p className="mb-0">Fields marked with an asterisk (<span className="text-danger">*</span>) are required.</p>
                        </div>
                        <form method="POST">
                            {
                                (login) &&
                                    Object.entries(login.field).map(( item, i ) => {
                                        // Create form field
                                        return (
                                           <div className={ (i > 0)? "mt-4" : ""} key={i}>
                                                <FormField field={item} />
                                           </div>
                                        )
                                    })
                            }

                            <div className="d-flex justify-content-start align-items-center gap-3 mt-4">
                                {
                                    (login && Object.keys(login.button).length > 0) &&
                                        Object.entries(login.button).map(( [ key, value ], i ) => {
                                            // Create button
                                            return (
                                                <button 
                                                    className={`btn ${value.class}`}
                                                    id={value.id}
                                                    name={value.name}
                                                    key={i}
                                                >
                                                    {value.text}
                                                </button>
                                            )
                                        })
                                }
                            </div>
                        </form>
                        <hr className="my-4"/>
                        <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper mt-4">
                            <Link to={`/${currentPortal}/register/`} className="link">Create an account</Link>
                            <Link to={`/${currentPortal}/forgot-password/`} className="link">Forgot Password?</Link>
                        </div>
                    </div>
                    
                </div>
                <footer className="text-white">
                    <p className="small text-center mb-0">&copy; 2025</p>
                </footer>  
            </div>
        </section>
    )

}

export default Login;