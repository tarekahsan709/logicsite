import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';

export default function NavbarItemWrapper(props) {
    const handleClick = (e) => {
        // Check if the link is an internal anchor
        if (props.to && props.to.startsWith('/#')) {
            e.preventDefault();  // Prevent default link behavior
            const id = props.to.substring(2);  // Remove '/#' from the string to get the ID
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });  // Execute smooth scroll to the element
            }
        }
    };

    // Extend the existing NavbarItem props with the onClick handler if it's an anchor link
    const newProps = {
        ...props,
        ...(props.to && props.to.startsWith('/#') && { onClick: handleClick })
    };

    return (
        <NavbarItem {...newProps} />
    );
}
