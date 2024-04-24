import React from 'react';
import Link from "@docusaurus/Link";

const SmoothScrollLink = ({to, className, children}) => {
    const handleClick = (event) => {
        // Check if the link is an anchor link on the same page
        if (to.startsWith('/#')) {
            event.preventDefault();  // Prevent the default link behavior
            const id = to.substring(2);  // Extract the anchor ID (strip "/#")
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});  // Execute smooth scroll to the element
            }
        }
    };

    return (
        <Link to={to} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default SmoothScrollLink;
