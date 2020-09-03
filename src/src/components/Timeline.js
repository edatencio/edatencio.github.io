import React from "react";

const Timeline = (props) =>
{
    return (
        <section className="page-section bg-secondary" id="about">
            <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center mb-0">{props.label}</h2>
                {/* Icon Divider */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <br /><br />
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src="assets/img/about/1.jpg"
                                alt
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                                    voluptatum eius sapiente, totam reiciendis temporibus qui
                                    quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                                    dolore laudantium consectetur!
            </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src="assets/img/about/2.jpg"
                                alt
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                                    voluptatum eius sapiente, totam reiciendis temporibus qui
                                    quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                                    dolore laudantium consectetur!
            </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src="assets/img/about/3.jpg"
                                alt
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                                    voluptatum eius sapiente, totam reiciendis temporibus qui
                                    quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                                    dolore laudantium consectetur!
            </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img
                                className="rounded-circle img-fluid"
                                src="assets/img/about/4.jpg"
                                alt
                            />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                                    voluptatum eius sapiente, totam reiciendis temporibus qui
                                    quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                                    dolore laudantium consectetur!
            </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
            <br />
            Of Our
            <br />
            Story!
          </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Timeline;
