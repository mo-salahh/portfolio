import React from 'react';
import { QualificationItemType as QualificationItemProps } from '../types';

const QualificationItem: React.FC<QualificationItemProps> = ({ title, subtitle, period, isLast }) => {
    return (
        <div className="qualification__data">
            <div>
                <h3 className="qualification__title">{title}</h3>
                <span className="qualification__subtitle">{subtitle}</span>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    {period}
                </div>
            </div>
            {!isLast && (
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            )}
        </div>
    );
};

export default QualificationItem;
