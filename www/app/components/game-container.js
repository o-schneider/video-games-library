var React = require('react');

var gameService = require('../services/game-service');
var GameForm = require('./game-form');
var GameList = require('./game-list');

var GameContainer = React.createClass({
  displayName: "GameContainer",
  getInitialState: function () {
    return {games: gameService.get()};
  },
  onGameSubmit: function (game) {
    gameService.add(game);
    this.setState({games: gameService.get()});
  },
  render: function () {
    return React.createElement("div", null,
      React.createElement(GameForm, {onSubmit: this.onGameSubmit}),
      React.createElement(GameList, {games: this.state.games})
    );
  }
});

module.exports = GameContainer;