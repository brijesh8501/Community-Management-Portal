// Create form field component
import CreateField from "./createField";

const FormLayout = ( prop ) => {

    // Prop of page form layout and button
    const pageFormLayout = prop.pageFormLayout;
    const pageFormButton = prop.pageFormButton;

    // Create form layout: row and its field
    return (pageFormLayout && pageFormLayout.length > 0)?

        <>
            {
                pageFormLayout.map( (item, i) => {
                    // Form design layout
                    return (
                        <div className={`row ${( i > 0)? "mt-4" : ""}`} key={i}>
                            { 
                                item.map(   ( innerItem, innerI) => 
                                {
                                    return (<div className={`${innerItem.class}`} key={innerI}>
                                            <CreateField field={innerItem} />
                                    </div>)
                                })
                            }
                        </div>
                    )
                } )
            }
            <div className="d-flex justify-content-start align-items-center gap-3 mt-4">
            {
                (pageFormButton && Object.keys(pageFormButton).length > 0) &&
                    Object.entries(pageFormButton).map(( [ key, value ], i ) => {
                        // Create button
                        return (
                            <button 
                                className={`btn ${value.class}`}
                                id={value.id}
                                name={value.name}
                                key={i}
                            >
                                {`${value.label.en} / ${value.label.guj}`}
                            </button>
                        )
                    })
            }
            </div>
        </>
                 
        :

        // Issues occured while creating form layout
        <div className="alert alert-danger">Something went wrong to create form layout</div>

}

export default FormLayout;


