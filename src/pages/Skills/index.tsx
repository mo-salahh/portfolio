import React from 'react';
import SkillsList from './components/SkillsList';
import { skillCategories } from '../../data';

const Skills: React.FC = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
                <SkillsList skillCategories={skillCategories}/>
        </section>
    );
};

export default Skills;
