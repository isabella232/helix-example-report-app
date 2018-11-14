const createLinks = require('./createLinks.js');

function pre(payload, action) {
  const {
      logger
  } = action;

  try {
      if (!payload.content) {
          logger.debug('Payload has no resource, nothing we can do');
          return payload;
      }

      const p = payload;
      p.content.children = createLinks(p.content.children, logger);

      return p;
  } catch (e) {
      return {
          error: e,
      };
  }
}

module.exports.pre = pre;
