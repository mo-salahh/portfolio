import React from "react";
import PortfolioList from "./components/PortfolioList";
import { portfolioItems } from "../../data";



const Portfolio: React.FC = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <PortfolioList items={portfolioItems} />
    </section>
  );
};

export default Portfolio;
