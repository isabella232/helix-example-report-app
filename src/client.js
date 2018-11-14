var React = require('react');
var ReactDOM = require('react-dom');

const scriptElements = document.querySelectorAll('script[data-component]');
scriptElements.forEach((el) => {
    const componentName = el.getAttribute('data-component');
    const Component = require('./components/' + componentName + '.jsx');
    const initialData = JSON.parse(el.innerHTML);
    
    ReactDOM.hydrate(
        // By convention the script mark up comes before the apps root.
        React.createElement(Component, initialData), el.nextElementSibling
    );
});