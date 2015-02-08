var React = require('react');
var GameRow = require('./game-row');

var GameList = React.createClass({
  displayName: "GameList",
  render: function () {
    var gameCompos = this.props.games.map(function (game, n) {
      return React.createElement(GameRow, {
        game: game,
        key: n
      });
    });

    return React.createElement("div", null, gameCompos);
  }
});

module.exports = GameList;
