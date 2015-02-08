var React = require('react');

var GameRow = React.createClass({
  displayName: "GameRow",
  render: function () {
    return React.createElement("div",
      {
        className: "row"
      },
      React.createElement("div", {className: "small-2 large-4 columns"}, this.props.game.name),
      React.createElement("div", {className: "small-2 large-4 columns"}, this.props.game.done)
    );
  }
});

module.exports = GameRow;