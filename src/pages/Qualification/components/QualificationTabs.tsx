import React from 'react';

interface QualificationTabsProps {
    activeTab: string;
    onTabClick: (tab: string) => void;
    tabs: string[];
}

const QualificationTabs: React.FC<QualificationTabsProps> = ({ activeTab, onTabClick, tabs }) => {
    return (
        <div className="qualification__tabs">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`qualification__button button--flex ${activeTab === tab ? 'qualification__active' : ''}`}
                    onClick={() => onTabClick(tab)}
                >
                    <i className={`uil ${tab === 'education' ? 'uil-graduation-cap' : 'uil-briefcase-alt'} qualification__icon`}></i>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
            ))}
        </div>
    );
};

export default QualificationTabs;
