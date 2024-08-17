export interface InfoItem {
  title: string;
  name: string;
}

export interface AboutData {
  imageSrc: string;
  description: string;
  infoItems: InfoItem[];
  cvLink: string;
}
