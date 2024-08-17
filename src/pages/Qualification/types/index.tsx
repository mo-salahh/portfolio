export interface QualificationItemType {
  title: string;
  subtitle: string;
  period: string;
}

export interface QualificationsData {
  education: QualificationItemType[];
  work: QualificationItemType[];
}
