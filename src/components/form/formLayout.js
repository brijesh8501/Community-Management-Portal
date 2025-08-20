// Create form field component
import CreateField from "./createField";

const FormLayout = ( prop ) => {

    // Prop of page form layout
    const pageFormLayout = prop.pageFormLayout;

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
        </>
                 
        :

        // Issues occured while creating form layout
        <div className="alert alert-danger">Something went wrong to create form layout</div>

}

export default FormLayout;


