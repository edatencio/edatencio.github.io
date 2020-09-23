import React from "react";

const Contact = () =>
{
    return (
        <div className="w-100" id="contact">
            <section className="container contact mt-5" >
                <div className="row">
                    <div className="col-lg ml-auto mb-3">
                        <h5>Contact me!</h5>
                        <p className="text-muted"><i className="fas fa-envelope mr-2"></i><a href="mailto:ed.atencio16@gmail.com">hello@edatencio.com</a></p>
                        <p className="text-muted"><i className="fas fa-map-marker mr-2"></i>Bogota, Colombia</p>
                        <div className="row">

                            <div className="col-lg">
                                <a className="btn-primary btn-social rounded" href="https://github.com/edatencio"><i className="fab fa-github"></i></a>
                                <a className="btn-primary btn-social rounded" href="https://www.linkedin.com/in/edatencio"><i className="fab fa-linkedin"></i></a>
                                <a className="btn-primary btn-social rounded" href="https://twitter.com/ed_atencio"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg mr-auto">
                        <h5>Download CV</h5>
                        <a className="btn btn-primary w-70px" href="assets/cv/Edward_Atencio_CV_en.pdf" download>PDF</a>
                        <a className="btn btn-primary w-70px" href="assets/cv/Edward_Atencio_CV_en.doc" download>DOC</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
