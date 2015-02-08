var Game = function(name) {
  this.name = name;
  this.done = false;
};

Game.prototype.equals = function(game) {
  return this.name === game.name
    && this.done === game.done;
};

module.exports = Game;