module.exports = () => ({
  component: 'Header',
  debug: false,
  test({ children: [title = null] }) {
    if (title && title.type === 'heading') {
      return title.children.find((child) => { return child.value === 'Header'; });
    }
    return false;
  },
  modify(payload) {
    return payload;
  },
});
