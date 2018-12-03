require('babel-register')({
  presets: ['react'],
});

module.exports = function (componentName) {

  const React = require('react');
  const ReactDOMServer = require('react-dom/server');
  const Component = require(`${process.cwd()}/src/components/${componentName}.jsx`);

  return function pre(payload) {

    const dataHTML = `
      <script data-component="${componentName}" type="text/json">
        ${JSON.stringify(payload.content)}
      </script>
    `;

    const appHTML = ReactDOMServer.renderToString(
      React.createElement(Component, payload.content)
    );

    // required for the react client code
    payload.content.componentName = componentName;

    // By convention the data mark up comes before the apps root.
    payload.content.html = `
      ${dataHTML}
      ${appHTML}
    `;
  };
};
