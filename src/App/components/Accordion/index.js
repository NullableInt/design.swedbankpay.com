import React from "react";

const Accordion = ({ items }) => (
    items.map(({ title, subtitle, content, id }, i) => (
        <div key={i} className="accordion">{"\n"}
            <button type="button" className="accordion-header" aria-expanded="false" aria-controls={id}>{"\n"}
                <span className="accordion-headline">
                    {title}
                </span>{"\n"}
                <small className="accordion-subtitle">
                    {subtitle}
                </small>{"\n"}
            </button>
            <div className="accordion-body" id={id}>
                <p>{content}</p>
            </div>
        </div>
    ))
);

export default Accordion;
