import React from "react";
import PropTypes from "prop-types";

const Panel = ({ title, subTitle, id, type, removeBottomPadding, removeAllPadding, halfPadding, darkMode, children, footerText }) => {
    return (
        <section
            className={`panel panel-${type || "default"}${removeBottomPadding ? " panel-bottomless" : ""}${removeAllPadding ? " panel-no-padding" : ""}${halfPadding ? " panel-half-padding" : ""}${darkMode ? " panel-dark-mode" : ""}`}
            id={id}>
            {title ?
                <header>
                    <h2 className="panel-title">{title}</h2>
                    {subTitle ? <p className="panel-sub-title">{subTitle}</p> : null}
                </header>
                : null}
            {children ?
                <div className="panel-body">{children}</div>
                : null}
            {footerText ?
                <footer>
                    {footerText ? <p>{footerText}</p> : null}
                </footer>
                : null}
        </section>
    );
};

Panel.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(["brand", "default"]),
    halfPadding: PropTypes.bool,
    removeAllPadding: PropTypes.bool,
    removeBottomPadding: PropTypes.bool,
    darkMode: PropTypes.bool,
    footerText: PropTypes.string
};

export default Panel;
