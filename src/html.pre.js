require('babel-register')({
  presets: ['react'],
});

// used to ignore css imports on the server
require('ignore-styles');

const components = require('./mapping');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function findComponent(section) {
  for (const { test, modify, component, debug = false } of components) {
    if (test(section)) {
      const out = modify(section);

      if (component === 'Text') {
        return out;
      }
      const reactComponent = debug ? 'Printing' : component;
      const Component = require(`${process.cwd()}/src/components/${reactComponent}.jsx`);
      const props = { data: out, component };

      const dataHTML = `
                    <script data-component="${reactComponent}" type="text/json">
                      ${JSON.stringify(props)}
                    </script>
              `;
      return dataHTML + ReactDOMServer.renderToString(
        React.createElement(Component, props)
      );
    }
  }
}

function pre(payload) {
  const htmlSections = payload
    .content
    .html
    .split('<hr>')
    .map((e) => `<div style="background-color: #ffe6e6">${e}</div>`)
  ;

  payload.content.components = payload
    .content
    .sections
    .map(findComponent)
    .map((c, i) => (c || htmlSections[i])).join('\n')
  ;
  return payload;
}

module.exports.pre = pre;
