'use strict';

const React = require('react');
const _ = require('underscore');

const InputMixin = {
  timeout: null,
  keyPressedIsPrintable(e) {
    var c = e.keyCode;
    var valid =
    c == 32              || // spacebar key
    (c > 47 && c < 58)   || // number keys
    (c > 64 && c < 91)   || // letter keys
    (c > 95 && c < 112)  || // numpad keys
    (c > 185 && c < 193) || // ;=,-./` (in order)
    (c > 218 && c < 223);   // [\]' (in order)
    return valid;
  },
  onKeyDown(e) {
    if (!this.keyPressedIsPrintable(e)) return;
    if (this.timeout) {
      clearTimeout(this.timeout);
    } else {
      this.props.onInputStart && this.props.onInputStart.call(this, e);
    }
    this.timeout = setTimeout(()=>{
      this.timeout = null;
      this.props.onInputEnd && this.props.onInputEnd.call(this, e);
    }, this.props.ttl || 1000);
  },
  attrs() {
    let attrs = _.clone(this.props);
    if (attrs.onInputStart || attrs.onInputEnd) {
      attrs.onKeyDown = (e) => {
        this.onKeyDown(e);
        this.props.onKeyDown && this.props.onKeyDown.call(this, e);
      }
    }
    return attrs;
  }
};

const Input = React.createClass({
  mixins: [InputMixin],
  render: function() {
    return (React.createElement('input', this.attrs()));
    // return React.DOM.input(this.attrs());
  }
});


module.exports = { Input: Input };
