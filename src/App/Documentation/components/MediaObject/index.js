import React from "react";

import { ComponentPreview, DocToc } from "#";
import MediaObjectComponent from "@/MediaObject";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Use the <code className="token property">.media</code> class on an object to style it as a small container that feature a left- or right-aligned image/icon alongside textual content.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <MediaObjectComponent imgUrl="https://via.placeholder.com/48x48" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
            <MediaObjectComponent icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
        </ComponentPreview>
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>Sizes for media object...</p>
        <h3>Small</h3>
        <p>Small media object <code className="token property">.media-sm</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <MediaObjectComponent size="sm" imgUrl="https://via.placeholder.com/40x40" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
            <MediaObjectComponent size="sm" icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
        </ComponentPreview>
        <h3>Large</h3>
        <p>Large media object <code className="token property">.media-lg</code>...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <MediaObjectComponent size="lg" imgUrl="https://via.placeholder.com/56x56" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
            <MediaObjectComponent size="lg" icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
        </ComponentPreview>
    </>
);

const MediaPosition = () => (
    <>
        <h2 id="media-position">Media position</h2>
        <p>Use the <code className="token property">.media-right</code> class to align the media content to the right.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <MediaObjectComponent mediaRight imgUrl="https://via.placeholder.com/48x48" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
            <MediaObjectComponent mediaRight icon="account_circle" heading="Bob Corlsan" text="bob.corlsan@payex.com" />
        </ComponentPreview>
    </>
);

const MediaObjectText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Media objects...</p>
        <Overview />
        <Sizes />
        <MediaPosition />
    </div>
);

const MediaObject = () => (
    <div className="doc-container">
        <div className="row">
            <MediaObjectText />
            <DocToc component={MediaObjectText} />
        </div>
    </div>
);

export default MediaObject;

/* For testing */
export { Overview, MediaPosition, MediaObjectText };
