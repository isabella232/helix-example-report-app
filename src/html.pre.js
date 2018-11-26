require('babel-register')({
    presets: ['react']
});

const components = require("./mapping");

var React = require('react');
var ReactDOMServer = require('react-dom/server');

function findComponent(section) {
    for (let {test, modify, component, debug = false} of components) {
        if (test(section)) {
            let out = modify(section);

            if (component === "Text") {
                return out;
            } else {
                let reactComponent = debug ? "Printing" : component;
                const Component = require(process.cwd() + '/src/components/' + reactComponent + '.jsx');
                const props = {data: out, component};

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
}

function pre(payload) {
    let htmlSections = payload
        .content
        .html
        .split("<hr>")
        .map(e => `<div style="background-color: #ffe6e6">${e}</div>`)
    ;

    payload.content.components = payload
        .content
        .sections
        .map(findComponent)
        .map((c, i) => c == null ? htmlSections[i] : c).join("\n")
    ;
    return payload;
}

module.exports.pre = pre;
