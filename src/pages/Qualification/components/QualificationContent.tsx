import React from 'react';
import QualificationItem from './QualificationItem';
import { QualificationItemType } from '../types';

interface QualificationContentProps {
    items: QualificationItemType[];
}

const QualificationContent: React.FC<QualificationContentProps> = ({ items }) => {
    return (
        <div className="qualification__content">
            {items.map((item, index) => (
                <QualificationItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    period={item.period}
                    isLast={index === items.length - 1}
                    index={index}
                />
            ))}
        </div>
    );
};

export default QualificationContent;
