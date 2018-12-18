require('babel-register')({
  presets: ['react'],
});

// used to ignore css imports on the server
require('ignore-styles');

const components = require('./mapping');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function fallBackComponent(html) {
  const component = 'Text';
  const clazz = require(`${process.cwd()}/src/components/${component}.jsx`);
  const props = {
    data: html,
    component,
  };
  return {
    component: clazz,
    props,
  };
}

function findComponentWithPropsForSection({ section, html }) {

  for (const { test, modify, component, debug = false } of components) {
    if (!test(section)) {
      continue;
    }

    try {
      const name = debug ? 'Printing' : component;
      const clazz = require(`${process.cwd()}/src/components/${name}.jsx`);
      const data = modify(section);
      console.log({ clazz });
      return {
        component: clazz,
        props: {
          data,
          component: name,
        },
      };
    } catch (e) {
      console.error(e);
      return fallBackComponent(html);
    }
  }

  return fallBackComponent(html);
}

function renderComponentWithProps({ component, props }) {
  const name = props.component;
  if (!component) {
    return props.data;
  }

  const dataHTML = `
    <script data-component="${name}" type="text/json">
      ${JSON.stringify(props)}
    </script>
  `;

  return dataHTML + ReactDOMServer.renderToString(
    React.createElement('div', null, React.createElement(component, props))
  );
}

function getSectionsFromPayload(p) {

  const html = p.content.html
    .split('<hr>')
    .map((e) => `<div style="background-color: #ffe6e6">${e}</div>`)
  ;

  const sections = p.content.sections
    .map((section, i) => {
      return {
        section,
        html: html[i],
      };
    });

  return sections;
}

function pre(payload) {

  console.log('payload.request.path', payload.request.path);

  const sections = getSectionsFromPayload(payload);
  payload.content.components = sections
    .map(findComponentWithPropsForSection)
    .map(renderComponentWithProps)
    .join('\n');
  return payload;
}

module.exports = pre;
