var React = require('react');

module.exports = {
  createRow: function (children) {
    return React.createElement('div', {className: 'row'}, children);
  },
  createColumn: function(size, children) {
    var className = "large-"+size+" columns";
    return React.createElement('div', {className: className}, children);
  }
};
