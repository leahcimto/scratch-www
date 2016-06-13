var classNames = require('classnames');
var FRCInput = require('formsy-react-components').Input;
var React = require('react');
var defaultValidationHOC = require('./validations.jsx').defaultValidationHOC;
var inputHOC = require('./input-hoc.jsx');

require('./input.scss');
require('./row.scss');

var Input = React.createClass({
    type: 'Input',
    getDefaultProps: function () {
        return {};
    },
    render: function () {
        var classes = classNames(
            'input',
            this.props.className
        );
        return (this.props.type === 'submit' || this.props.noformsy ?
            <input {... this.props} className={classes} /> :
            <FRCInput {... this.props} className={classes} />
        );
    }
});

module.exports = inputHOC(defaultValidationHOC(Input));
