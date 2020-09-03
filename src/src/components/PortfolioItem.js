import React from "react";
import PortfolioModal from "./PortfolioModal";

const PortfolioItem = ({ item }) =>
{
    const modalId = "portfolioModal" + item.id;

    return (
        <div className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#" + modalId}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={item.bannerURL} alt="" />
            </div>
            <PortfolioModal item={item} id={modalId} />
        </div>
    );
};

export default PortfolioItem;
