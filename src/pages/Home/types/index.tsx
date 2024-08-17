export interface SocialLink {
  href: string;
  iconClass: string;
}

export interface HomeDataSection {
    title: string;
    subtitle: string;
    description: string;
    contactLink: string;
}

export interface HomeData {
  socialLinks: SocialLink[];
  imageSrc: string;
  dataSections: HomeDataSection;
  scrollTarget: string;
}
