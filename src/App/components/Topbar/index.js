import React, { Fragment } from "react";
import PropTypes from "prop-types";
import logo from "@src/img/logo/spay_horizontal_pos.svg";

const isDev = process.env.version === "LOCAL_DEV";

const TopbarBtn = () => (
    <button type="button" className="topbar-btn">{"\n\t\t"}
        <i className="material-icons topbar-btn-icon">menu</i>
        {"\n\t\t"}
    </button>
);

const TopbarMenu = ({ menu, logout }) => {
    const { items } = menu;

    return (
        <nav className="topbar-nav">
            <div className="topbar-link-container">{"\n"}
                <i className="material-icons close-topbar-nav">close</i>
                {items.map((item, i) => (
                    <Fragment key={i}>
                        {"\n"}
                        <a href="#" className={item.name === "Home" ? "active" : null} onClick={e => e.preventDefault()}>
                            {"\n"}
                            {item.icon ? <i className="material-icons">{item.icon}</i> : null}
                            {"\n"}
                            <span>{item.name}</span>
                            {"\n"}
                        </a>
                    </Fragment>
                ))}{"\n"}
                {logout ? <TopbarLogout /> : null}
            </div>
        </nav>
    );
};

const TopbarLogout = () => (
    <>
        <a className="topbar-link-right" href="#" onClick={e => e.preventDefault()}>{"\n"}
            <i className="material-icons">exit_to_app</i>{"\n"}
            <span>Log out</span>{"\n"}
        </a>{"\n"}
    </>
);

const TopbarLogo = () => (
    <>
        <a className="topbar-logo" href="/" onClick={e => e.preventDefault()}>{"\n"}
            <img src={!isDev ? `${process.env.basename}img/spay_horizontal_pos.svg` : logo} alt="swedbankpay-logo"/>{"\n"}
        </a>{"\n"}
    </>
);

const Topbar = ({ topbarContent, wide, logout, id }) => (
    <header className={`topbar${wide ? ` topbar-${wide}-wide` : ""}`} id={id}>{"\n"}
        {topbarContent ?
        <>
            <TopbarBtn />{"\n"}
            <TopbarLogo />
            <TopbarMenu menu={topbarContent} logout={!!logout} />
        </> :
        <>
            <TopbarLogo />
            {logout ? <TopbarLogout /> : null}
        </>}
    </header>
);

Topbar.propTypes = {
    topbarContent: PropTypes.object,
    fixed: PropTypes.bool,
    logout: PropTypes.bool
};

export default Topbar;
