module.exports = () => ({
  component: 'Footer',
  debug: false,
  test({ children: [title = null] }) {
    if (title && title.type === 'heading') {
      return title.children.find((child) => { return child.value === 'Footer'; });
    }
    return false;
  },
  modify(payload) {
    return payload;
  },
});
