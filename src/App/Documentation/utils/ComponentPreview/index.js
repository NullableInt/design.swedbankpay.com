import React from "react";
import PropTypes from "prop-types";
import { renderToStaticMarkup } from "react-dom/server";
import PrismCode from "react-prism";
import jsbeautifier from "js-beautify";

// NOTE: dangerousHTML prop is used when wanting to show html in the codefigure without encoding.

const ComponentPreview = ({ children, language, removeOuterTag, hideValue, removeList, showCasePanel, codeFigure, dangerousHTML }) => {
    const _removeOuterTag = element => {
        const div = document.createElement("div");
        div.innerHTML = renderToStaticMarkup(element);

        if (div.firstElementChild) {
            return div.firstElementChild.innerHTML;
        } else if (div.firstChild) {
            return div.firstChild.nodeValue;
        }
        return "Check ComponentPreview _removeOuterTag!";
    };

    const _removeList = element => {
        const div = document.createElement("div");
        div.innerHTML = renderToStaticMarkup(element);

        const listElements = div.querySelectorAll("li");
        let htmlString = "";

        listElements.forEach(el => {
            htmlString += `${el.innerHTML} \n`;
        });

        return htmlString;
    };

    const _removeEmpty = val => {
        val = val.replace(/=""/g, "");
        val = val.replace(/ class>/g, ">");
        val = val.replace(/ class /g, " ");
        val = val.replace(/value /g, "");

        return val;
    };

    const setDangerousHtml = val => {
        let code = "";
        if (typeof val.forEach === "function") {
            val.forEach(v => code += `${v}\n`);
        } else {
            code = val;
        }
        return code;
    };

    const CodeFigure = () => {
        let code = "";

        if (language === "html" && dangerousHTML) {
            code = setDangerousHtml(children);
        } else if (language === "html" && children && typeof children.map === "function") {
            children.map(child => {
                if (removeOuterTag) {
                    code += _removeOuterTag(child);
                } else if (removeList) {
                    code += _removeList(child);
                } else {
                    code += renderToStaticMarkup(child);
                }
            });

        } else if (language === "html") {
            if (removeOuterTag) {
                code += _removeOuterTag(children);
            } else if (removeList) {
                code += _removeList(children);
            } else {
                code += renderToStaticMarkup(children);
            }
        } else {
            switch (typeof children) {
                case "string":
                    code = children;
                    break;
                case "object":
                    children.forEach(child => code += child);
                    break;
                default:
                    console.warn("CodeFigure: children needs attention!");
            }
        }

        switch (language) {
            case "html":
                code = jsbeautifier.html_beautify(code);
                code = _removeEmpty(code);
                if (hideValue) {
                    code = code.replace(/ value="(.*)"/g, "");
                }
                break;
            case "css":
                code = jsbeautifier.css_beautify(code);
                break;
            case "javascript":
                code = jsbeautifier.js_beautify(code, {
                    brace_style: "preserve-inline", // eslint-disable-line camelcase
                    e4x: true
                });
                break;
            default:
                return "update switchcase!";
        }

        return (
            <figure>
                <pre>
                    <PrismCode className={`language-${language}`}>
                        {code}
                    </PrismCode>
                </pre>
            </figure>
        );
    };


    const ShowCasePanel = () => (
        <div className="showcase-panel">
            {children}
        </div>
    );

    return (
        <>
            {showCasePanel ? <ShowCasePanel /> : null}
            {codeFigure ? <CodeFigure /> : null}
        </>
    );
};

ComponentPreview.propTypes = {
    language: PropTypes.oneOf(["html", "javascript", "css"]).isRequired,
    removeOuterTag: PropTypes.bool,
    hideValue: PropTypes.bool,
    removeList: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    codeFigure: PropTypes.bool,
    dangerousHTML: PropTypes.bool
};

export default ComponentPreview;
