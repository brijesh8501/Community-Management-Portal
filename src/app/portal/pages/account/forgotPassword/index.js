import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../../state/globalContext";
import '../../../layout/style/main.css';
import FormField from "../../../../components/form/formField";

const ForgotPassword = () => {

    // State
    const { state, dispatch } = useGlobalContext();

    // Get state of forgot password and current portal
    const { forgotPassword, currentPortal } = state; 
    
    // Form Information
    const formLayout = (forgotPassword)? forgotPassword.formLayout : "";
  

    return (
        
        <section className="peacock-gradient-bg" id="section-wrapper">
            <div className="container min-vh-100 d-flex flex-column justify-content-between align-items-stretch" id="section-inner-wrapper">
                <div className="d-flex flex-column gap-5 justify-content-center align-items-center flex-fill">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" />
                    <div className="silver-light-bg p-5 max-width-550px">
                        <div className="alert alert-info mt-4">
                            <p className="mb-0">Fields marked with an asterisk (<span className="text-danger">*</span>) are required.</p>
                        </div>
                        <form method="POST">
                            {
                                (formLayout && formLayout.length > 0) &&
                                    formLayout.map( (item, i) => {
                                        // Form design layout
                                        return (
                                            <div className="row">
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
                                    (forgotPassword && Object.keys(forgotPassword.button).length > 0) &&
                                        Object.entries(forgotPassword.button).map(( [ key, value ], i ) => {
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
                            <Link to={`/${currentPortal}/`} className="link">Log In</Link>
                            <Link to={`/${currentPortal}/change-password/`} className="link">Change Password?</Link>
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

export default ForgotPassword;