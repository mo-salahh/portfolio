export interface QualificationItemType {
  title: string;
  subtitle: string;
  period: string;
  isLast: boolean;
}

export interface QualificationsData {
  education: QualificationItemType[];
  work: QualificationItemType[];
}
