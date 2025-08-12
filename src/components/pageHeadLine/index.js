const HeadLine = ({ title, style, headTag }) => {
    
    // Style of line breaker between English and Gujarati title
    const { hrLine, label } = style;

    // Heading: h1, h2, h3, h4, h5, h6, h7
    // If headTag props exists then use headTag prop values otherwise default h1 tag
    const HeadingTag = (headTag)? headTag : "h1"

    return (
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
            <div className="mb-4">
                <HeadingTag className="headline fw-500 mb-0 text-center" aria-label={title.en}><strong>{title.en}</strong></HeadingTag>
                <div className="line-breaker-wrapper">
                    <div className={`line-breaker ${hrLine.class}`}></div>
                    <div className={`line-breaker-text ${label.class}`}>❖</div>
                    <div className={`line-breaker ${hrLine.class}`}></div>
                </div>
                <p className="headline fw-600 mb-0 text-center">{title.guj}</p>
            </div>
        </div>
    )

}

export default HeadLine;