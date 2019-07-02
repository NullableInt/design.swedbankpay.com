import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, Property, DocContainer } from "#";
import CardComponent from "@/Card";
import MediaObject from "@/MediaObject";

const textArr = ["This is a lot of text", "With some more text", "And then even some more", "Is it really possible to have this much text in one card?", "Yes!"];

const DefaultBehaviour = () => (
    <>
        <h2 id="default-behaviour">Default behaviour</h2>
        <p>
            The cards component is a flexible content container. You can use them with and without footers, headers, pictures, buttons and more.
            Cards have no width constraint so they will fill the parent container. Use cards in combination with our <Link to="/docs/core/grid">grid</Link> to decide how they will grow and shrink.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4">
                    <CardComponent
                        title={<MediaObject size="sm" icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" textSmall />}
                        type="primary"
                        imgSrc="https://picsum.photos/300/?random"
                        text="This paragraph contains some text about the person displayed above."
                        content={
                            <ul className="list pt-3">
                                <li><span className="font-weight-bold">Card number:</span> 4563 5648 5642</li>
                                <li><span className="font-weight-bold">Balance:</span> 2500,- </li>
                            </ul>
                        }
                        btnTxt="Button"
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-4">
                    <CardComponent
                        type="secondary"
                        title={<h3>Card secondary</h3>}
                        text="Descriptive text to put inside the card, could contain a lot."
                        footerLinkTxt="Footer link"
                    >
                        <MediaObject size="sm" icon="account_balance" heading="725 NOK" text="Outstanding balance" textSmall muted />
                    </CardComponent>
                </div>
                <div className="col-12 col-lg-6 col-xl-4">
                    <CardComponent
                        type="plain"
                        title={<h3>Card plain</h3>}
                        imgSrc="https://picsum.photos/300/?random"
                        text="Descriptive text to put inside the card, could contain a lot."
                        btnTxt="Button"
                        footerLinkTxt="Footer link"
                    >
                        <MediaObject size="sm" icon="verified_user" heading="75%" text="Complete" textSmall muted />
                    </CardComponent>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const CardVariants = () => (
    <>
        <h2 id="card-variants">Card Variants</h2>
        <p>
            You don`t have to use all sections of a card, you can use different combinations as you see fit.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                    <CardComponent
                        type="primary"
                        title={<h3>My Custom card</h3>}
                        text="Card text"
                        smallText="Small card text"
                    >
                        <MediaObject size="sm" icon="verified_user" heading="75%" text="Complete" textSmall muted />
                    </CardComponent>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-3">
                    <CardComponent
                        type="primary"
                        title={<h3>Text card</h3>}
                        textSection={textArr}
                        smallText="This is some small text"
                    />
                </div>

                <div className="col-12 col-lg-6 col-xl-4">
                    <CardComponent
                        type="secondary"
                        title={<h3>Image card</h3>}
                        imgSrc="https://picsum.photos/300/?random"
                        text="This is a card with an image and body"
                    />
                </div>
            </div>
        </ComponentPreview>
    </>
);

class Card extends Component {
    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Cards are meant to display smaller items and is not intended to span the entire width of a page.
                    See <Link to="/docs/components/panel">panel</Link> if the card component is too narrow.
                </p>
                <DefaultBehaviour />
                <CardVariants />
            </DocContainer>
        );
    }
}

export default Card;

/* For testing */
export { DefaultBehaviour, CardVariants };
