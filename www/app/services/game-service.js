var _ = require('lodash');

var GameService = function(storage) {
  this.storage = storage;
  this.games = [];
};

GameService.prototype.add = function(game) {
  this.games.push(game);
};
GameService.prototype.remove = function(game) {
  _.remove(this.games, function(obj) {
    return game.equals(obj);
  });
};
GameService.prototype.get = function() {
  return this.games;
};

module.exports = new GameService();