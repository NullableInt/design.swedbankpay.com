import React, { Component } from "react";

import ComponentPreview, { Attribute } from "#/ComponentPreview";
import DocToc from "#/DocToc";

import { Datepicker as DatepickerComponent } from "@/FormComponents";
import { datepicker } from "$/px-script";

const moment = window.moment;

const SimpleDatepicker = () => (
    <>
        <h2 id="simple-datepicker">Simple datepicker</h2>
        <p>Simple datepicker..<Attribute data={true} name="datepicker" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent />
        </ComponentPreview>
    </>
);

const InitialValue = () => (
    <>
        <h2 id="initial-value">Initial value</h2>
        <p>Initial value..<Attribute data={true} name="datepicker-init-value" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent value={moment().format("YYYY-MM-DD")} />
        </ComponentPreview>
        <p>Keep in mind that the datepicker will not insert the initial value if it does not correctly match the set format (iso8601 if you have not specified a format).</p>
    </>
);

const CustomFormat = () => (
    <>
        <h2 id="custom-format">Custom format</h2>
        <p>Custom format..<Attribute data={true} name="datepicker-format" value="[nb|sv|da|fi|en|iso8601(default)]" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent label="nb (norwegian):" value={moment().format("DD.MM.YYYY")} format="nb" />
            <DatepickerComponent label="sv (swedish):" value={moment().format("YYYY-MM-DD")} format="sv" />
            <DatepickerComponent label="da (danish):" value={moment().format("DD.MM.YYYY")} format="da" />
            <DatepickerComponent label="fi (finnish):" value={moment().format("DD.MM.YYYY")} format="fi" />
            <DatepickerComponent label="en (english):" value={moment().format("DD/MM/YYYY")} format="en" />
            <DatepickerComponent label="iso8601 (robotic):" value={moment().format("YYYY-MM-DD")} format="iso8601" />
        </ComponentPreview>
    </>
);

const IncludeTime = () => (
    <>
        <h2 id="include-time">Include time</h2>
        <p>Include time.. <Attribute data={true} name="datepicker-time" value="true" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent time={true} value={moment().format("HH:mm DD.MM.YYYY")} format="nb" />
        </ComponentPreview>
    </>
);

const Required = () => (
    <>
        <h2 id="required">Required</h2>
        <p>Required.. <Attribute data={true} name="required" value="true" /> will autopopulate the input after clicking it if no date is selected. Keep in mind that if you do not pass a value to the datepicker it will remain blank if the user does not click the input.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent required={true} />
        </ComponentPreview>
    </>
);

const ShowingMultipleMonths = () => (
    <>
        <h2 id="showing-multiple-months">Showing multiple months</h2>
        <p>Showing multiple months.. <Attribute data={true} name="datepicker-months" value="[number]" />.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <DatepickerComponent months="2" />
        </ComponentPreview>
    </>
);

const DateRange = () => (
    <>
        <h2 id="date-range">Date range</h2>
        <p>Date range with <Attribute data={true} name="datepicker-min" /> and <Attribute data={true} name="datepicker-max" />...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            {/* eslint-disable newline-per-chained-call*/}
            <DatepickerComponent
                value={moment().format("DD.MM.YYYY")}
                min={moment().subtract(5, "d").format("DD.MM.YYYY")}
                max={moment().add(5, "d").format("DD.MM.YYYY")}
                months="2"
                format="nb"
            />
            {/* eslint-enable newline-per-chained-call*/}
        </ComponentPreview>
        <p><b>NOTE:</b> Using range with required and no initial value will make the datepicker select current date if a user clicks the input and does not select a date within the range.</p>
    </>
);

const Options = () => (
    <>
        <h2 id="available-options">Available options</h2>
        <p>Options available through <Attribute data={true} name="datepicker" />...</p> Keep in mind that setting any of these values will render them true, so setting an attribute to <Attribute value="false" /> will still render it true.
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Default value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-value" />
                    </td>
                    <td></td>
                    <td>
                        Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-format" />
                    </td>
                    <td>
                        <Attribute value="iso8601" />
                    </td>
                    <td>
                        <p>
                            Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1).
                        </p>
                        <p>
                            The following options are available:
                        </p>
                        <ul className="list">
                            <li className="mb-sm"><Attribute value="nb" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="sv" />: YYYY-MM-DD</li>
                            <li className="mb-sm"><Attribute value="da" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="fi" />: DD.MM.YYYY</li>
                            <li className="mb-sm"><Attribute value="en" />: DD/MM/YYYY</li>
                            <li className="mb-sm"><Attribute value="iso8601" />: YYYY-MM-DD (default)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-time" />
                    </td>
                    <td></td>
                    <td>
                        If the calendar shows the current time and allows you to change it using a dropdown.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-months" />
                    </td>
                    <td>
                        <Attribute value="1" />
                    </td>
                    <td>
                        Number of months to display in the datepicker.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-min" />
                    </td>
                    <td></td>
                    <td>
                        Disallow dates before min.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="datepicker-max" />
                    </td>
                    <td></td>
                    <td>
                        Disallow dates past max.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data={true} name="required" />
                    </td>
                    <td></td>
                    <td>
                        Forces a value in the input field, but only if an initial value is set or the user clicks/tabs the input.
                    </td>
                </tr>
            </tbody>
        </table>
    </>
);

const DatepickersText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Datepickers...</p>
        <SimpleDatepicker />
        <InitialValue />
        <CustomFormat />
        <IncludeTime />
        <Required />
        <ShowingMultipleMonths />
        <DateRange />
        <Options />
    </div>
);

class Datepickers extends Component {
    componentDidMount () {
        datepicker.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <DatepickersText />
                    <DocToc component={DatepickersText} />
                </div>
            </div>
        );
    }
}

export default Datepickers;

/* for testing */
export { SimpleDatepicker, InitialValue, CustomFormat, IncludeTime, Required, ShowingMultipleMonths, DateRange, Options, DatepickersText };
