import React from "react";

const TimelineItem = (props) =>
{
    const lines = props.item.description.map((line) => <p className="text-muted">{line}</p>);

    return (
        <li className={props.inverted ? "timeline-inverted" : ""} id={props.item.id}>
            <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={props.item.imgURL} alt="" />
            </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h3 className="subheading">{props.item.title}</h3>
                </div>
                <div className="timeline-body">
                    {lines}
                </div>
            </div>
        </li>
    );
};

export default TimelineItem;
