import React from "react";

const ExpandablePlaceholder = () => (
    <div className="expandable">
        <button className="btn expandable-header">
            <span>Placeholder title</span>
            <small>Placeholder subtitle</small>
        </button>
        <div className="expandable-content">
            <p>Placeholder text</p>
        </div>
    </div>
);

/* The expandable component acceps either an array or a single object [AW] */
const Expandable = ({ items }) => (
    items
        ? (Array.isArray(items)
            ? items.map(({ title, subtitle, content }, i) => (
                <div key={i} className="expandable">{"\n"}
                    <button type="button" className="btn expandable-header">{"\n"}
                        <span>
                            {title}
                        </span>{"\n"}
                        <small>
                            {subtitle}
                        </small>{"\n"}
                    </button>
                    <div className="expandable-content">
                        <p>{content}</p>
                    </div>
                </div>
            )) :
            <ExpandablePlaceholder />
        )
        : <ExpandablePlaceholder />
);

export default Expandable;

export { ExpandablePlaceholder };
