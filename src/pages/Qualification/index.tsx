import React from 'react';
import QualificationSection from './components/QualificationSection';
import { qualificationsData } from '../../data';

const Qualification: React.FC = () => {
    return (
        <div>
            <QualificationSection qualifications={qualificationsData} />
        </div>
    );
};

export default Qualification;
