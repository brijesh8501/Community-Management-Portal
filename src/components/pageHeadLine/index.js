const HeadLine = ({ title, style }) => {
    
    // Style of line breaker between English and Gujarati title
    const { hrLine, label } = style;

    return (
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
            <div className="mb-4">
                <h1 className="headline fw-500 mb-0 text-center" aria-label={title.en}><strong>{title.en}</strong></h1>
                <div className="line-breaker-wrapper">
                    <div className={`line-breaker ${style.hrLine.class}`}></div>
                    <div className={`line-breaker-text ${style.label.class}`}>❖</div>
                    <div className={`line-breaker ${style.hrLine.class}`}></div>
                </div>
                <p className="headline fw-600 mb-0 text-center">{title.guj}</p>
            </div>
        </div>
    )

}

export default HeadLine;