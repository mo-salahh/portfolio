import React from 'react';

interface NavToggleProps {
    toggleMenu: () => void;
}

const NavToggle: React.FC<NavToggleProps> = ({ toggleMenu }) => {
    return (
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
        </div>
    );
};

export default NavToggle;
