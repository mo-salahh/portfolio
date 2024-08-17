import React, { useState, useEffect } from "react";

interface NavItem {
  href: string;
  iconClass: string;
  text: string;
}

interface NavMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  navItems: NavItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  navItems,
}) => {
  const [activeItem, setActiveItem] = useState<string>(navItems[0].href);

  const handleClick = (href: string) => {
    setActiveItem(href);
    closeMenu();
  };

  const handleScroll = () => {
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveItem(item.href);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return (
    <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
      <ul className="nav__list grid">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav__item`}
          >
            <a
              href={item.href}
              className={`nav__link ${
                activeItem === item.href ? "active-link" : ""
              }`}
              onClick={() => handleClick(item.href)}
            >
              <i className={`uil ${item.iconClass} nav__icon`}></i> {item.text}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="uil uil-times nav__close"
        id="nav-close"
        onClick={toggleMenu}
      ></i>
    </div>
  );
};

export default NavMenu;
