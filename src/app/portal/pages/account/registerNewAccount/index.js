import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../state/globalContext";
import '../../../layout/style/main.css';
import FormField from "../../../../../components/form/formField";

const RegisterNewAccount = () => {

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of register new account and current portal
    const { registerNewAccount, currentPortal } = state; 

    // Form Information
    const formLayout = (registerNewAccount)? registerNewAccount.formLayout : "";
  
    return (
        
        <section className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex gap-5 flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="silver-light-bg p-5 max-width-650px">
                        <h1 className="h3 text-center">Create a new account</h1>
                        <div className="alert alert-info mt-4">
                            <p className="mb-0">Please provide the necessary information below to sign up for a new account. Fields marked with an asterisk (<span className="text-danger">*</span>) are required.</p>
                        </div>
                        <form method="POST">
                            {
                                (formLayout && formLayout.length > 0) &&
                                    formLayout.map( (item, i) => {
                                        // Form design layout
                                        return (
                                            <div className="row" key={i}>
                                                { 
                                                    item.map(   ( innerItem, innerI) => 
                                                    {
                                                        return (<div className={`${innerItem.class} mt-4`} key={innerI}>
                                                                <FormField field={innerItem} />
                                                        </div>)
                                                    })
                                                }
                                            </div>
                                        )
                                    } )

                            }
                            <div className="d-flex justify-content-start align-items-center gap-3 mt-4">
                                {
                                    (registerNewAccount && Object.keys(registerNewAccount.button).length > 0) &&
                                        Object.entries(registerNewAccount.button).map(( [ key, value ], i ) => {
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
                        <div className="d-flex gap-3 justify-content-between align-items-center flex-wrap navigate-wrapper">
                            <Link to={`/${currentPortal}/`} className="link">Log In</Link>
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

export default RegisterNewAccount;