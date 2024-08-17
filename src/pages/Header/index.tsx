import React, { useState } from 'react';
import NavLogo from './components/NavLogo';
import NavMenu from './components/NavMenu';
import NavToggle from './components/NavToggle';
import DarkModeButton from './components/DarkModeButton';
import { navItems } from '../../data';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const logoText = 'Mohammad';

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <NavLogo logoText={logoText} />
                <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} navItems={navItems} />
                <div className="nav__btns">
                    <DarkModeButton />
                    <NavToggle toggleMenu={toggleMenu} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
