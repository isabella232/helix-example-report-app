/* eslint-disable no-shadow */
/*

Example:
- ![Headline](/icons/icon.png)
  Subheader [LinkTitle](Link)
- ![Headline2](/icons/icon.png)
  The even better Stuff
 */

module.exports = () => ({
  component: 'Stage',
  debug: false,
  test({ children: [{ type, ordered = true, children }, ...rest] }) {

    return type === 'list' &&
            !ordered &&
            rest.length === 0 &&
            children.map(({ children: [p] }) => p).every(({ children = [] }) => {
              if (!(children.length >= 2 && children.length <= 3)) {
                return false;
              }
              const [{ type: image }, { type: text }, { type: link } = { type: 'link' }] = children;
              return image === 'image' && text === 'text' && link === 'link';
            });
  },
  modify({ children: [{ children }] }) {
    return children.map(({ children: [{ children }] }) => {
      const [{ url: Image, alt: Headline }, { value: Subline }, ...Anchor] = children;
      const out = { Image, Headline, Subline };
      if (Anchor.length > 0) {
        const [{ url: URL, children: [{ value: Title }] }] = Anchor;
        out.Anchor = { URL, Title };
      }
      return out;
    });
  },
});
