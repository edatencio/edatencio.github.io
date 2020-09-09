import React from "react";
import PortfolioData from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () =>
{
    const portfolioItems = Object.keys(PortfolioData).map((key, index) =>
    {
        return <PortfolioItem item={PortfolioData[key]} key={"portfolioItem" + index} />;
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
                {/* Filter buttons */}
                <div align="center">
                    <button className="btn btn-default filter-button" data-filter="all">All</button>
                    <button className="btn btn-default filter-button" data-filter="Unity">Unity</button>
                    <button className="btn btn-default filter-button" data-filter="React">React</button>
                    <button className="btn btn-default filter-button" data-filter="Arduino">Arduino</button>
                </div>
                {/* Portfolio Grid Items */}
                <div className="row">
                    {portfolioItems}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
