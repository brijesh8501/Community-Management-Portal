const FormField = ( { field } ) => {

    // Initialize empty object of field details
    let fieldDetails = {};

    // Validate details before creating form field
    if(
        field.type &&
        field.name &&
        ( field.label && Object.keys(field.label).length > 0 ) &&
        ( field.id && Object.keys(field.id).length > 0 )
    ){

        // Assign the validated form field info
        fieldDetails = field;
       
        // Switch case to check field type and create field accordingly
        switch (fieldDetails.type) {

            case 'select':

                // Select dropdown
                return (
                    <>
                        <label 
                            htmlFor={fieldDetails.name} 
                            className="form-label"
                        >
                            {fieldDetails.label.en.text}
                        </label>
                        <input 
                            type={fieldDetails.type} 
                            className="form-control" 
                            name={fieldDetails.name} 
                            id={fieldDetails.id.field_1}
                        />
                    </>
                )
                
            default:

                // Default to text, email, password type
                return (
                    <>
                        <label 
                            htmlFor={fieldDetails.name} 
                            className="form-label"
                        >
                            {fieldDetails.label.en.text}
                        </label>
                        <input 
                            type={fieldDetails.type} 
                            className="form-control" 
                            name={fieldDetails.name} 
                            id={fieldDetails.id.field_1}
                        />
                    </>
                )
        }

    }else{

        // Form field validation failed so no field tag created to return 
        return (<></>);

    }

}

export default FormField;