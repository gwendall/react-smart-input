'use strict';

const React = require('react');

const Input = React.createClass({displayName: "Input",
  render: function() {
    return (React.createElement('input', this.props));
  }
});

module.exports = { Input: Input };
