import React, { useEffect, useState } from 'react';

const DarkModeButton: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // Retrieve the saved theme and icon from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('selected-theme');

        if (savedTheme) {
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
            setDarkMode(savedTheme === 'dark');
        }
    }, []);

    // Toggle the theme and icon
    const toggleTheme = () => {
        const isDarkMode = !darkMode;
        setDarkMode(isDarkMode);
        document.body.classList.toggle('dark-theme', isDarkMode);

        // Save the theme and icon state to localStorage
        localStorage.setItem('selected-theme', isDarkMode ? 'dark' : 'light');
    };

    return (
        <i
            className={`uil ${darkMode ? 'uil-sun' : 'uil-moon'} change-theme`}
            id="theme-button"
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
        ></i>
    );
};

export default DarkModeButton;
