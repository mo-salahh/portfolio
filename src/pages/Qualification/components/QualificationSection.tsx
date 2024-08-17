import React, { useState } from 'react';
import QualificationContent from './QualificationContent';
import QualificationTabs from './QualificationTabs';
import { QualificationsData } from '../types';

const QualificationSection: React.FC<QualificationsData> = ({ qualifications }) => {
    const tabs = Object.keys(qualifications);
    const [activeTab, setActiveTab] = useState<string>(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <QualificationTabs activeTab={activeTab} onTabClick={handleTabClick} tabs={tabs} />

                <div className="qualification__sections">
                    {tabs.map((tab) => (
                        activeTab === tab && (
                            <QualificationContent key={tab} items={qualifications[tab]} />
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualificationSection;
