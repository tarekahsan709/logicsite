import React from 'react';
import OriginalNavbarItem from '@theme-original/NavbarItem';

function NavbarItem(props) {
    if (props.to && props.to.startsWith('/#')) {  // Handle in-page anchors
        return (
            <a
                href={props.to}
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(props.to);
                    target.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                {props.label}
            </a>
        );
    }
    return <OriginalNavbarItem {...props} />;
}

export default NavbarItem;
