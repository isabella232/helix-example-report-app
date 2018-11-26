const fs = require("fs");
const path = require("path");
const stripPosition = (obj) => {
    if (Array.isArray(obj)) {
        obj.forEach(stripPosition);
    } else {
        delete obj.position;
        if (obj.hasOwnProperty("children")) {
            obj.children.forEach(stripPosition);
        }
    }

    return obj;
};

const helper = {stripPosition};

module.exports = [
    require("./Stage")(helper),
    require("./ImageTeaser")(helper),
    require("./Diagram")(helper),
    require("./Timeline")(helper),
    require("./Text")(helper)
]