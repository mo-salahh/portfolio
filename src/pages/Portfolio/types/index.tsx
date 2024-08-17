export interface PortfolioItem {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  links: { title: string; href: string }[];
  modalContent: string[];
}
