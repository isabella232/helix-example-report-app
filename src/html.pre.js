function pre(payload) {
  payload.content.time = `${new Date()}`;
}
module.exports.pre = pre;
