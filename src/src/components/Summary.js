import React from "react";

const Summary = () =>
{
    return (
        <section className="page-section bg-primary text-white mb-0" id="summary">
            <div className="container">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-white">
                    Summary
                </h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                </div>
                <br />
                {/* About Section Content*/}
                <div className="row">
                    <div className="col-lg ml-auto">
                        <h5>HELLO!</h5>
                        <p className="text-muted text-justify">
                            I'm Edward Atencio. I'm a game developer and .NET programmer, I'm a hard worker and knowledge eater. I specialize in game programming but enjoy tackling any problem placed in front of me.
                        </p>
                        <p className="text-muted text-justify">
                            I worked at "Super Videomania" for one (1) year and six (6) months, developing games to be placed in arcade rooms, using the Unity game engine, and the C# programming language.
                        </p>
                        <p className="text-muted text-justify">
                            During the latter six (6) months of my time there, I also took the role of "lead programmer" of a small team (two game developers, an Arduino developer, and a 3D modeler) supervising their projects, keeping their progress on schedule, giving feedback and helping out when they got stuck.
                        </p>
                    </div>
                    <div className="col-lg mr-auto">
                        <h5>HIRE ME!</h5>
                        <p className="text-muted text-justify">
                            I'm currently searching for new opportunities (not necessarily related to game development), excited to work on new projects, and expand my boundaries!.
                        </p>
                        <p className="text-muted text-justify">
                            Also, I can work remotely or reallocate if necessary.
                        </p>
                        <br />
                        <h5>LET'S TALK!</h5>
                        <p className="text-muted text-justify">
                            I'd love to chat about job opportunities, projects I've worked on, or why Steven Universe is such a great show!.
                        </p>
                        <p className="text-muted text-justify">
                            Don't hesitate to <a className="js-scroll-trigger active" href="#contact">contact me!.</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
