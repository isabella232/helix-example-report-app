var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./Component.jsx');

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

ReactDOM.hydrate(
    React.createElement(Component, initialData), document.getElementById("appRoot")
);