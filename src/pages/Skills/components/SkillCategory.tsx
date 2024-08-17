import React from 'react';
import SkillItem from './SkillItem';

interface SkillCategoryProps {
    title: string;
    subtitle: string;
    icon: string;
    skills: { name: string; percentage: string; className: string }[];
    isOpen: boolean;
    onToggle: () => void;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, subtitle, icon, skills, isOpen, onToggle }) => {
    return (
        <div className={`skills__content ${isOpen ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={onToggle}>
                <i className={`uil ${icon} skills__icon`}></i>
                <div>
                    <h1 className="skills__title">{title}</h1>
                    <span className="skills__subtitle">{subtitle}</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
                {skills.map((skill, index) => (
                    <SkillItem key={index} name={skill.name} percentage={skill.percentage} className={skill.className} />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;
