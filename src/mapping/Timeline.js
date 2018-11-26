/*

Example:
1. Januar
    - ![Headline](/icons/icon.png)
      Text
    - ![Headline](/icons/icon.png)
      Text
2. Februar
    - ![Headline](/icons/icon.png)
      Text
    - ![Headline](/icons/icon.png)
      Text

 */

module.exports = () => ({
    component: "TimeLine",
    debug:true,
    test({children: [{children, type, ordered = false}, ...rest]}) {
        return rest.length === 0 &&
            type === "list" &&//Ordered List
            ordered &&
            children.every(({children}) =>
                children.length === 2 &&
                children[0].type === "paragraph" && //Paragraph(Title)
                children[1].type === "list" && //List(Items)
                children[1].children.every(({children: [{type, children}, ...rest]}) =>
                    rest.length === 0 &&
                    type === "paragraph" &&
                    children.length === 2 &&
                    children[0].type === "image" &&
                    children[1].type === "text"
                )
            );
    },
    modify({children: [{children: entries}]}) {

        entries = entries.map(({children: [{children:[{value:Title}]}, {children: Items}]}) => ({
            Title,
            Items:Items.map(({children:[{children:[{url:Image,alt:Title},{value:Text}]}]})=>({Image,Title,Text}))
        }));

        return entries;
    }
});