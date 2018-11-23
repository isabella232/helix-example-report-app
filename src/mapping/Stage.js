/*

Example:
- ![Headline](/icons/icon.png)
  Subheader [LinkTitle](Link)
- ![Headline2](/icons/icon.png)
  The even better Stuff
 */

module.exports = () => ({
    component: "Stage",
    debug: false,
    test({children: [{type, ordered = true, children}, ...rest]}) {

        return type === "list" &&
            !ordered &&
            rest.length === 0 &&
            children.map(({children: [p]}) => p).every(({children = []}) => {
                if (!(children.length >= 2 && children.length <= 3)) {
                    return false;
                }
                let [{type: image}, {type: text}, {type: link} = {type: "link"}] = children;
                return image === "image" && text === "text" && link === "link";
            });
    },
    modify({children: [{children}]}) {
        return children.map(({children:[{children}]}) => {
            let [{url: Image, alt: Headline}, {value: Subline}, ...Anchor] = children;
            let out = {Image, Headline, Subline};
            if (Anchor.length > 0) {
                let [{url: URL, children: [{value: Title}]}] = Anchor;
                out.Anchor = {URL, Title};
            }
            return out;
        });
    }
});