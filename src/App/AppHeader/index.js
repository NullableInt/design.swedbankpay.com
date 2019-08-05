import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { GithubLogo, SlackLogo } from "./HeaderIcons";

import pkg from "~/package.json";

const basename = process.env.basename;

const AppHeader = () => (
    <header className="topbar topbar-md-wide designguide-header">
        <button type="button" className="topbar-btn">
            <i className="material-icons topbar-btn-icon">menu</i>
        </button>
        <a href="/" className="topbar-logo">{"\n"}
            <img src={`${basename}img/spay_horizontal_pos.svg`} alt="logo" />{"\n"}
        </a>
        <nav className="topbar-nav">
            <div className="topbar-link-container">
                <i className="material-icons close-topbar-nav">close</i>
                <NavLink exact to="/" activeClassName="active"><span>Home</span></NavLink>
                <NavLink to="/docs" activeClassName="active"><span>Documentation</span></NavLink>
                <NavLink to="/examples" activeClassName="active"><span>Examples</span></NavLink>
                <div className="topbar-info topbar-link-right">
                    <div className="topbar-info-contact">
                        <a href="https://github.com/SwedbankPay/design.swedbankpay.com" target="_blank" rel="noopener noreferrer">
                            <GithubLogo />
                        </a>
                        <a href="https://payex.slack.com/messages/C0L3W8B2S/" target="_blank" rel="noopener noreferrer">
                            <SlackLogo />
                        </a>
                    </div>
                    <div className="topbar-info-version">
                        <a href={`https://github.com/SwedbankPay/design.swedbankpay.com/releases/tag/${pkg.version}`} target="_blank" rel="noopener noreferrer">v.{process.env.version || pkg.version}</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default withRouter(AppHeader);
