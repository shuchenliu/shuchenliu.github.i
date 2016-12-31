var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var container = require('./container.jsx');

$(function(){
  ReactDOM.render(
    React.createElement(container),
    document.getElementById("root")
  );
});
