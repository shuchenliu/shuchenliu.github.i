var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.jsx');

$(function(){
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
});
