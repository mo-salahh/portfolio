import React, { useState } from 'react';
import QualificationContent from './QualificationContent';
import QualificationTabs from './QualificationTabs';
import { QualificationItemType } from '../types';


interface QualificationProps {
    qualifications: {
        education: QualificationItemType[];
        work: QualificationItemType[];
    };
}

const QualificationSection: React.FC<QualificationProps> = ({ qualifications }) => {
    const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');

    const handleTabClick = (tab: 'education' | 'work') => {
        setActiveTab(tab);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <QualificationTabs activeTab={activeTab} onTabClick={handleTabClick} />

                <div className="qualification__sections">
                    <QualificationContent items={qualifications.education} />
                    <QualificationContent items={qualifications.work} />
                </div>
            </div>
        </section>
    );
};

export default QualificationSection;
