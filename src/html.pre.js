/**
 * The 'pre' function that is executed before the HTML is rendered
 * @param payload The current payload of processing pipeline
 * @param payload.content The content
 */
function pre(payload) {
  payload.content.time = `${new Date()}`;
}

module.exports.pre = pre;
