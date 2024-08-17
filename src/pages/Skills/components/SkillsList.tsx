import React, { useState } from "react";
import SkillCategory from "./SkillCategory";
import { SkillCategoryType } from "../types";

interface SkillsListProps {
  skillCategories: SkillCategoryType[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skillCategories }) => {
  const [openSkill, setOpenSkill] = useState<string | null>("web-development");

  const toggleSkill = (skill: string) => {
    setOpenSkill(openSkill === skill ? null : skill);
  };

  return (
    <div className="skills__container container grid">
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.id}
          title={category.title}
          subtitle={category.subtitle}
          icon={category.icon}
          skills={category.skills}
          isOpen={openSkill === category.id}
          onToggle={() => toggleSkill(category.id)}
        />
      ))}
    </div>
  );
};

export default SkillsList;
