import React from 'react';

interface NavLogoProps {
    logoText: string;
}

const NavLogo: React.FC<NavLogoProps> = ({ logoText }) => {
    return (
        <a href="#" className="nav__logo">{logoText}</a>
    );
};

export default NavLogo;
