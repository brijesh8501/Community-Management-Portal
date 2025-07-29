const FormField = ( { field } ) => {

    // Get field details from prop passed
    const [ item, details ] = field;

    // Initialize empty object of field details
    let fieldDetails = {};

    // Validate details before creating form field
    if(
        details.info.type &&
        details.info.name &&
        ( details.info.label && Object.keys(details.info.label).length > 0 ) &&
        ( details.info.id && Object.keys(details.info.id).length > 0 )
    ){

        // Assign the validated form field info
        fieldDetails = details.info;

        // Switch case to check field type and create field accordingly
        switch (fieldDetails.type) {

            case 'select':

                // Select dropdown
                return (
                    <>
                        <label 
                            htmlFor={item} 
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
                            htmlFor={item} 
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