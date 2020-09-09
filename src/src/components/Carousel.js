import React from "react";

const Carousel = (props) =>
{
    const images = props.images.map((img, index) =>
    {
        let className = "carousel-item";
        className += (index === 0) ? " active" : "";

        return (
            <div className={className} key={img}>
                <img className="d-block w-100" src={img} alt="" />
            </div>

        );
    });

    const indicators = props.images.map((img, index) =>
    {
        return <li data-target={"#" + props.id} data-slide-to={index} className={index === 0 ? "active" : ""} />;
    })

    return (
        <div id={props.id} className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {/* {indicators} */}
            </ol>
            <div className="carousel-inner">
                {images}
            </div>
            <a className="carousel-control-prev" href={"#" + props.id} role="button" data-slide="prev" >
                <div className="rounded-circle">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </div>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={"#" + props.id} role="button" data-slide="next" >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div >
    );
};

export default Carousel;
