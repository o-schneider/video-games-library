var React = require('react');

var FoundationUtils = require('./foundation-utils');

var Game = require('../models/game');
var gameService = require('../services/game-service');

var GameForm = React.createClass({
  displayName: "GameForm",
  handleSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    this.props.onSubmit(new Game(name));
    this.refs.name.getDOMNode().value = "";
  },
  render: function () {
    return React.createElement('form', {onSubmit: this.handleSubmit},
      FoundationUtils.createRow(
        FoundationUtils.createColumn(12,
          React.createElement('label', null, "Nom",
            React.createElement('input', {type: 'text', ref: 'name'})
          )
        )
      ),
      FoundationUtils.createRow(
        FoundationUtils.createColumn(12,
          React.createElement('input', {type: 'submit', value: 'Add'})
        )
      )
    );
  }
});

module.exports = GameForm;
