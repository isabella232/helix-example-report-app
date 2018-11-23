/*

Example:
[![Headline](/icons/icon.png)](Link)
Text
 */

module.exports = ({stripPosition}) => ({
    component: "ImageTeaser",
    debug: true,
    test({children: [{type: paragraph, children: [{type: link, children: [{type: image} = {}] = []} = {}, {type: text} = {}] = []} = {}, ...rest]}) {

        return rest.length === 0 &&
            paragraph === "paragraph" &&
            link === "link" &&
            image === "image" &&
            text === "text"
            ;

    },

    modify(section) {
        let {children: [{children: [{url: LinkToPage, children: [{url: Image,alt:Headline} = {}] = []}, {value: Text}]}]} = section;
        return {
            Image,
            Headline,
            Text,
            LinkToPage
        };
    }
});