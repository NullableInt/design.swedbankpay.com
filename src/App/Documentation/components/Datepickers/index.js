import React, { Component } from "react";

import { ComponentPreview, Attribute, Property, DocContainer } from "#";
import { Datepicker as DatepickerComponent } from "@/FormComponents";
import { datepicker } from "$/px-script/main";
import Alert from "@/Alert";

// require("flatpickr/dist/flatpickr.css");

const moment = window.moment;

const AboutDatepickers = () => (
    <>
        <h2 id="about-datepickers">About</h2>
        <p>
            Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you
            expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date.
            If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use.
        </p>
    </>
);

const SimpleDatepicker = () => (
    <>
        <h2 id="simple-datepicker">Simple datepicker</h2>
        <p>
            A basic datepicker can be made by applying the attribute <Attribute data name="datepicker" /> to an input element inside a <Property value=".form-group" />.
            The basic datepicker has a read-only input field.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="simle-datepicker"
            />
        </ComponentPreview>
    </>
);

const InitialValue = () => (
    <>
        <h2 id="initial-value">Initial value</h2>
        <p>If you want to set an initial value for your datepicker use <Attribute data value="{your-date}" name="datepicker-value" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                value={moment().format("YYYY-MM-DD")}
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="init-value-datepicker"
            />
        </ComponentPreview>
        <Alert type="warning">
            <h5>Initial value and format</h5>
            <p>Keep in mind that the datepicker will not insert the initial value if it does not correctly match the set format (<Attribute value="iso8601"/> if you have not specified a format).</p>
        </Alert>
    </>
);

const CustomFormat = () => (
    <>
        <h2 id="custom-format">Custom format</h2>
        <p>
            To use a custom format include <Attribute data name="datepicker-format" value="[nb|sv|da|fi|en|iso8601(default)]" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                label="nb (norwegian):"
                value={moment().format("DD.MM.YYYY")}
                format="nb"
                prefixType="icon"
                prefixValue="event"
                id="nb-datepicker"
            />
            <DatepickerComponent
                label="sv (swedish):"
                value={moment().format("YYYY-MM-DD")}
                format="sv"
                prefixType="icon"
                prefixValue="event"
                id="sv-datepicker"
            />
            <DatepickerComponent
                label="da (danish):"
                value={moment().format("DD.MM.YYYY")}
                format="da"
                prefixType="icon"
                prefixValue="event"
                id="da-datepicker"
            />
            <DatepickerComponent
                label="fi (finnish):"
                value={moment().format("DD.MM.YYYY")}
                format="fi"
                prefixType="icon"
                prefixValue="event"
                id="fi-datepicker"
            />
            <DatepickerComponent
                label="en (english):"
                value={moment().format("DD/MM/YYYY")}
                format="en"
                prefixType="icon"
                prefixValue="event"
                id="en-datepicker"
            />
            <DatepickerComponent
                label="iso8601 (robotic):"
                value={moment().format("YYYY-MM-DD")}
                format="iso8601"
                prefixType="icon"
                prefixValue="event"
                id="iso8601-datepicker"
            />
        </ComponentPreview>
    </>
);

const IncludeTime = () => (
    <>
        <h2 id="include-time">Include time</h2>
        <p>
            Adding time to your datepicker is as easy as using <Attribute data name="datepicker-time" value="true" />. If you wish to set
            a default time for the time picker just include it in the <Attribute data name="datepicker-value" value={moment().format("DD.MM.YYYY HH:mm")} /> attribute.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                time
                value={moment().format("DD.MM.YYYY HH:mm")}
                format="nb"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="include-time-datepicker"
            />
        </ComponentPreview>
    </>
);

const Required = () => (
    <>
        <h2 id="required">Required</h2>
        <p>If you set <Attribute data name="required" value="true" /> to true it will autopopulate the input after clicking it if no date is selected. Keep in mind that if you do not pass a value to the datepicker it will remain blank if the user does not click the input.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                required label="Date"
                prefixType="icon"
                prefixValue="event"
                id="required-datepicker"
            />
        </ComponentPreview>
    </>
);

const ShowingMultipleMonths = () => (
    <>
        <h2 id="showing-multiple-months">Showing multiple months</h2>
        <p>If you need to show more than one month in your date picker use the attribute <Attribute data name="datepicker-months" value="[number]" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DatepickerComponent
                months="2"
                label="Date"
                prefixType="icon"
                prefixValue="event"
                id="multiple-months-datepicker"
            />
        </ComponentPreview>
    </>
);

const DateRange = () => {
    let futureDate = new Date();

    futureDate.setDate(futureDate.getDate() + 15);
    futureDate = `${futureDate.getFullYear()}-${futureDate.getMonth() + 1}-${futureDate.getDate()}`;

    return (
        <>
            <h2 id="date-range">Date range</h2>
            <p>
                You can set a range of available dates to select from by using <Attribute data name="datepicker-min" /> and <Attribute data name="datepicker-max" />
            </p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <DatepickerComponent
                    value="today"
                    min="today"
                    max={futureDate}
                    format="nb"
                    label="Date"
                    prefixType="icon"
                    prefixValue="event"
                    id="date-range-datepicker"
                />
            </ComponentPreview>
            <p><b>NOTE:</b> Using range with required and no initial value will make the datepicker select current date if a user clicks the input and does not select a date within the range.</p>
        </>
    );
};

const Options = () => (
    <>
        <h2 id="available-options">Available options</h2>
        <p>Options available through <Attribute data name="datepicker" />...</p> Keep in mind that setting any of these values will render them true, so setting an attribute to <Attribute value="false" /> will still render it true.
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
                        <Attribute data name="datepicker-value" />
                    </td>
                    <td></td>
                    <td>
                        Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-format" />
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
                        <Attribute data name="datepicker-time" />
                    </td>
                    <td></td>
                    <td>
                        If the calendar shows the current time and allows you to change it using a dropdown.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-months" />
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
                        <Attribute data name="datepicker-min" />
                    </td>
                    <td></td>
                    <td>
                        Disallow dates before min.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="datepicker-max" />
                    </td>
                    <td></td>
                    <td>
                        Disallow dates past max.
                    </td>
                </tr>
                <tr>
                    <td>
                        <Attribute data name="required" />
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

class Datepickers extends Component {
    componentDidMount () {
        datepicker.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users
                    write the given date, alleviating the need to do format validation.
                </p>
                <AboutDatepickers />
                <SimpleDatepicker />
                <InitialValue />
                <CustomFormat />
                <IncludeTime />
                {/* <Required /> We have to script this manually if we want it [AW] */}
                <ShowingMultipleMonths />
                <DateRange />
                {/* <Options /> */}
            </DocContainer>
        );
    }
}

export default Datepickers;

/* For testing */
export { SimpleDatepicker, InitialValue, CustomFormat, IncludeTime, Required, ShowingMultipleMonths, DateRange, Options };
