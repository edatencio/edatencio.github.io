import React from "react";
import PortfolioModal from "./PortfolioModal";

const PortfolioItem = ({ item }) =>
{
    const modalId = "portfolioModal" + item.id;
    const iconClass = "fas " + (item.externalLink ? "fa-external-link-alt" : "fa-search") + " fa-2x";

    const Link = (props) =>
    {
        if (item.externalLink)
            return <a className="portfolio-item mx-auto" href={item.externalLink} target="_blank">{props.children}</a>;
        else
            return <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#" + modalId}>{props.children}</div>;
    }

    return (
        <div className={"col-md-6 col-lg-4 mb-5 filter " + item.filter}>
            <Link>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 bg-gradient">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <i className={iconClass}></i>
                    </div>
                </div>
                <img className="img-fluid" src={item.bannerURL} alt="" />
            </Link>
            <div className="mt-3">
                <h5 className="text-center">{item.title}</h5>
                <p className="text-center text-muted">{item.filter}</p>
            </div>

            {item.images ? <PortfolioModal item={item} id={modalId} /> : null}
        </div>
    );
};


export default PortfolioItem;
