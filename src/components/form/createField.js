const CreateField = ( { field } ) => {

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

            case 'checkbox':
                return (
                    <>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={fieldDetails.id.field_1} />
                            <label className="form-check-label" htmlFor={fieldDetails.id.field_1}>
                                {fieldDetails.label.en.text} / {fieldDetails.label.guj.text}
                            </label>
                        </div>
                    </>
                )

            case 'dropdown':

                // Select dropdown
                return (
                    <>
                        <label 
                            htmlFor={fieldDetails.name} 
                            className="form-label"
                        >
                            {fieldDetails.label.en.text} / {fieldDetails.label.guj.text} 
                        </label>
                        <input 
                            type={fieldDetails.subType} 
                            className="form-control" 
                            name={fieldDetails.name} 
                            id={fieldDetails.id.field_1}
                        />
                    </>
                )
                
            case 'inputGroup': 
                
                // Initialize empty array of input group field
                let inputGroupField = [];

                // Input group text to be added in input group field
                const inputGroupItem = <span className="input-group-text" key="addon">{fieldDetails.inputGroupInfo.item}</span>;
                
                // Add input field to the initialized empty array
                inputGroupField.push(
                    <input 
                        type={fieldDetails.subType} 
                        className="form-control" 
                        name={fieldDetails.name} 
                        id={fieldDetails.id.field_1}
                        key="input"
                    />
                );

                // Check whether input group info exists or not
                // Check two parameters "item" and "postion" exists
                // Validate its length is equal to 2; no errors
                // Check whether to add input group text to start or end position
                (
                    fieldDetails.inputGroupInfo &&
                    fieldDetails.inputGroupInfo.item &&
                    fieldDetails.inputGroupInfo.position &&
                    Object.entries(fieldDetails.inputGroupInfo).length == 3
                )&&( 
                        (fieldDetails.inputGroupInfo.position === "start")?
                            inputGroupField.unshift(inputGroupItem)
                            :
                            inputGroupField.push(inputGroupItem)
                )

                // Input group textbox
                return (
                    <>
                        <label 
                            htmlFor={fieldDetails.name} 
                            className="form-label"
                        >
                            {fieldDetails.label.en.text} / {fieldDetails.label.guj.text} 
                        </label>
                        <div className="input-group">
                            {inputGroupField}
                    </div>
                    </>
                )

            case 'textarea':

                // Textarea
                return (
                    <>
                        <label 
                            htmlFor={fieldDetails.name} 
                            className="form-label"
                        >
                            {fieldDetails.label.en.text} / {fieldDetails.label.guj.text} 
                        </label>
                        <textarea 
                            type={fieldDetails.subType} 
                            className="form-control" 
                            name={fieldDetails.name} 
                            id={fieldDetails.id.field_1}
                        ></textarea>
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
                            {fieldDetails.label.en.text} / {fieldDetails.label.guj.text} 
                        </label>
                        <input 
                            type={fieldDetails.subType} 
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

export default CreateField;