const FormButton = ( prop ) => {

    // Prop of page form layout and button
    const pageFormButton = prop.pageFormButton;

    return (
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
    )
}

export default FormButton