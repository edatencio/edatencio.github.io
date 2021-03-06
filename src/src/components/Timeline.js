import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = (props) =>
{
    let inverted = true;

    const items = Object.keys(props.data).map((key, index) =>
    {
        inverted = !inverted;
        return <TimelineItem item={props.data[key]} inverted={inverted} key={"timeline" + props.label + index} />;
    });

    return (
        <section className="page-section bg-secondary" id={"timeline" + props.label}>
            <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center mb-0">{props.label}</h2>

                {/* Icon Divider */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>

                <br /><br />

                <ul className="timeline">
                    {items}
                </ul>
            </div>
        </section>
    );
}

export default Timeline;
