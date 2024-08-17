import React from 'react';
import { SkillItemType as SkillItemProps } from '../types';

const SkillItem: React.FC<SkillItemProps> = ({ name, percentage, className }) => {
    return (
        <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">{percentage}</span>
            </div>
            <div className="skills__bar">
                <span className={`skills__percentage ${className}`}></span>
            </div>
        </div>
    );
};

export default SkillItem;
