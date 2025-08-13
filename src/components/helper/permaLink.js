// Create permalink
const permaLink = ( createLink ) => {
    
    return `/${createLink.filter(Boolean).join("/")}/`;

}

export default permaLink;