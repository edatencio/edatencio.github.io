import React from "react";
import Carousel from "./Carousel";

const PortfolioModal = (props) =>
{
    return (
        <div className="portfolio-modal modal fade" id={props.id} tabIndex={-1} role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">

                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                    </button>

                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">

                                    {/* --- Title --- */}
                                    <h2 className="portfolio-modal-title mb-0">
                                        {props.item.title}
                                    </h2>

                                    {/* --- Icon Divider --- */}
                                    <div className="divider-custom divider-light">
                                        <div className="divider-custom-line" />
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="divider-custom-line" />
                                    </div>

                                    {/* --- Image --- */}
                                    {/*<img className="img-fluid rounded mb-5" src={props.item.bannerURL} alt="" />*/}

                                    {/* --- Caroussel --- */}
                                    <Carousel id={"carousel" + props.item.id} images={props.item.images} />

                                    <br />
                                    {/* --- Text --- */}
                                    <p className="mb-5">{props.item.description}</p>

                                    <button className="btn btn-primary" data-dismiss="modal">
                                        <i className="fas fa-times fa-fw" />
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
