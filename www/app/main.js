var React = require('react');
var GameContainer = require('./components/game-container');

window.addEventListener('load', function () {
  var node = document.getElementById("content");
  if (node === null) {
    console.error("no node to attach", GameList.displayName);
    return;
  }
  console.log("Rendering app on ", node);

  var element = React.createElement(GameContainer);
  React.render(element, node);
});

