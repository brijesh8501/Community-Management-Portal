import GlobalWrapper from "../../../portalGlobalWrapper";
// Brand configuration
import brandConfiguration from "../../../../../components/brand";
// State global context call out
import { useGlobalContext } from "../../../state/globalContext";
// Page headline component
import HeadLine from "../../../../../components/pageHeadLine";
// Create form layout component
import FormLayout from "../../../../../components/form/formLayout";
// Create form button component
import FormButton from "../../../../../components/form/formButton";
// Page meta information
import { familyMemberAddPageMeta  } from "../../../embed/pageMeta";
// Register new account / Create new account web page configuration
import { 
    pageFormFieldset,
    pageFormLayout,
    pageFormButton 
} from "./pageConfig";


const FamilyMemberAddEdit = () => {

    // Brand information
    const { message } = brandConfiguration;
    // State
    const { state, dispatch } = useGlobalContext();

    // Page form layout
    const { block1: formBlock1, block2: formBlock2, block3: formBlock3 } = pageFormLayout;

    // Page form fieldset config
    const { block2: fieldsetBlock2, block3: fieldsetBlock3 } = pageFormFieldset;

    // Page form fieldset other fields
    const { nativeField } = fieldsetBlock3.otherFields;

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
            <section className="section-wrapper">
                <div className="d-flex flex-column gap-4 py-5 px-3 px-sm-4 p-xxl-5">
                    <HeadLine title={familyMemberAddPageMeta.label} style={ pageHeadLineStyle }/>
                    <div className="alert alert-info">
                        <p className="mb-1">{message.form.fieldRequired.en()}</p>
                        <p className="mb-0">{message.form.fieldRequired.guj()}</p>
                    </div>
                    <form autoComplete="off" method="POST">
                        <FormLayout pageFormLayout={formBlock1} />
                        <fieldset className="bg-white p-3 p-sm-4 mt-4">
                            <legend className="h6 fw-normal border-bottom pb-1 mb-4">{`${fieldsetBlock2.label.en} / ${fieldsetBlock2.label.guj}`}</legend>
                            <div className="alert alert-info small mb-4">{`${fieldsetBlock2.subLabel.en} / ${fieldsetBlock2.subLabel.guj}`}</div>
                            <FormLayout pageFormLayout={formBlock2} />
                        </fieldset>  
                        <fieldset className="bg-white p-3 p-sm-4 mt-4">
                            <legend className="h6 fw-normal border-bottom pb-1 mb-4">{`${fieldsetBlock3.label.en} / ${fieldsetBlock3.label.guj}`}</legend>
                            <div className="alert alert-info small mb-4">{`${fieldsetBlock3.subLabel.en} / ${fieldsetBlock3.subLabel.guj}`}</div>
                            {/*****    Form Layout same format required. Wrap nativeField into [[ ]] arrays   *****/}
                            <FormLayout pageFormLayout={[[ nativeField ]]} />
                            <FormLayout pageFormLayout={formBlock3} />
                        </fieldset>
                        <FormButton pageFormButton={pageFormButton} />  
                    </form>
                </div>  
            </section>
        </div>
        </GlobalWrapper>
    )

}

export default FamilyMemberAddEdit;