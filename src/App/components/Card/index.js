import React from "react";
import PropTypes from "prop-types";

const Card = ({ type, title, imgSrc, icon, highlightTitle, highlightSubTitle, text, smallText, btnTxt, footerTxt, footerLink, footerLinkTxt }) => (
    <li className={`card${type ? ` card-${type}` : ""}`}>
        {title ? <header>
            <h3>
                <a href="#">{title}</a>
            </h3>
        </header> : null}
        {imgSrc ? <div className="card-img">{"\n"}
            <img src={imgSrc} alt=""/>{"\n"}
        </div> : null}
        <div className="highlight">
            {icon ? <i className="material-icons">{icon}</i> : null}
            <div className="highlight-wrapper">
                {highlightTitle ? <h4 className="highlight-title">{highlightTitle}</h4> : null}
                {highlightSubTitle ? <p className="highlight-subtitle">{highlightSubTitle}</p> : null}
            </div>
        </div>
        <div className="card-body">
            <p>{text}</p>
            <small>{smallText}</small>
        </div>
        <footer>
            <button type="button" className="btn btn-success btn-block">{btnTxt}</button>
            {footerTxt ? <div className="footer-text"><p>{footerTxt}</p></div> : null}
            {footerLinkTxt ? <div className="footer-link"><a href={footerLink || "#"}>{footerLinkTxt}</a></div> : null}
        </footer>
    </li>
);

Card.propTypes = {
    type: PropTypes.oneOf(["brand", "default", "light"]),
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    icon: PropTypes.string,
    highlightTitle: PropTypes.string,
    highlightSubTitle: PropTypes.string,
    text: PropTypes.string,
    smallText: PropTypes.string,
    btnTxt: PropTypes.string,
    footerTxt: PropTypes.string,
    footerLink: PropTypes.string,
    footerLinkTxt: PropTypes.string
};

export default Card;
