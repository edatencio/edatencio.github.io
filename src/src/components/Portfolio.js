import React from "react";
import PortfolioData from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () =>
{
    const portfolioItems = Object.keys(PortfolioData).map((key) =>
    {
        return <PortfolioItem item={PortfolioData[key]} />;
    });

    return (
        <section className="page-section portfolio bg-secondary" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center mb-0">Portfolio</h2>
                {/* Icon Divider */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <br />
                {/* Portfolio Grid Items */}
                <div className="row">
                    {portfolioItems}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
