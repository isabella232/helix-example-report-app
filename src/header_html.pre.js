const tohtml = require('hast-util-to-html');
const tohtast = require('mdast-util-to-hast');
const createLinks = require('./createLinks.js');

function pre(payload, action) {
  const {
      logger
  } = action;

  try {      
      payload.content.children = createLinks(payload.content.children, logger);
      //const newast = tohtast(payload.content.sections[0].children[0]);
      return payload;
  } catch (e) {
      return {
          error: e,
      };
  }
}

module.exports.pre = pre;
