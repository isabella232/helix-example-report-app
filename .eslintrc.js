module.exports = {
  "extends": "@namics/eslint-config/configurations/es6-react.js",
  "parser": "babel-eslint",
  "rules": {
    "complexity": [1, 8],
    "indent": [2, 2],
    "no-alert": [1],
    "no-console": [1],
    "react/prefer-stateless-function": [0],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "require-jsdoc": ["error", {
      "require": {
          "FunctionDeclaration": false,
          "MethodDefinition": false,
          "ClassDeclaration": false,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        }
      }
    ],
  },
  "globals": {
    "module": false,
    "process": false,
    "require": false,
    "__dirname": false,
  }
}
