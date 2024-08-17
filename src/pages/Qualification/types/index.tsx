export interface QualificationItemType {
  title: string;
  subtitle: string;
  period: string;
}

export interface QualificationsData {
  qualifications: {
    [key: string]: QualificationItemType[];
  };
}
