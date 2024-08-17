import React from 'react';

interface QualificationTabsProps {
    activeTab: 'education' | 'work';
    onTabClick: (tab: 'education' | 'work') => void;
}

const QualificationTabs: React.FC<QualificationTabsProps> = ({ activeTab, onTabClick }) => {
    return (
        <div className="qualification__tabs">
            <div
                className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
                onClick={() => onTabClick('education')}
            >
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
            </div>
            <div
                className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
                onClick={() => onTabClick('work')}
            >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Work
            </div>
        </div>
    );
};

export default QualificationTabs;
