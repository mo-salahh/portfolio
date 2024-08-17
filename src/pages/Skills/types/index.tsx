export interface SkillItemType {
    name: string;
    percentage: string;
}

export interface SkillCategoryType {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    skills: SkillItemType[];

}