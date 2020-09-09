import React from "react";
import PortfolioModal from "./PortfolioModal";

const PortfolioItem = ({ item }) =>
{
    const modalId = "portfolioModal" + item.id;

    return (
        <div className={"col-md-6 col-lg-4 mb-5 filter " + item.filter}>
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#" + modalId}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 bg-gradient">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-2x"></i></div>
                </div>
                <img className="img-fluid" src={item.bannerURL} alt="" />
            </div>
            <div className="mt-3">
                <h5 className="text-center">{item.title}</h5>
                <p className="text-center text-muted">{item.filter}</p>
            </div>
            <PortfolioModal item={item} id={modalId} />
        </div>
    );
};


export default PortfolioItem;
