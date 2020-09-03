import React from "react";

// Only visible on small and extra-small screen sizes
const ScrollToTop = () =>
{
    return (
        <div className="scroll-to-top d-lg-none position-fixed">
            <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
        </div>
    );
};

export default ScrollToTop;
