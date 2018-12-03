/*

Example:
| A(X) | B(Y:Money) |
|------|------------|
| 1    | 0          |
| 2    | 2          |
| 3    | 4          |
| 4    | 8          |
| 5    | 16         |
| 6    | 32         |
>Title
 */

const headRegExp = /^(.*?)\s*\(\s*([XYxy])\s*(?::(.+?))?\s*\)$/;

function getHeader(table) {
  return table.children[0].children
    .map(({ children: [{ value }] }) => value.trim())
    .map((key, col) => [headRegExp.exec(key), col])
    .filter(([h]) => h)
    .map(([[, caption, key, label = caption], col]) => ({
      key: key.toUpperCase(), label, column: col,
    }))
    .reduce((o, { key, label, column }) => Object.assign(o, { [key]: { label, column } }), {});
}

module.exports = () => ({
  component: 'Diagram',
  debug: true,
  test({ children: [table, title = null, ...rest] }) {

    if (rest.length === 0 &&
            table.type === 'table' &&
            (!title || title.type === 'blockquote')) {
      const header = getHeader(table);
      return Object.prototype.hasOwnProperty.call(header, 'X') && Object.prototype.hasOwnProperty.call(header, 'Y');
    }
    return false;
  },
  modify({
    children: [
      table,
      { children: [{ children: [{ value: Title = null } = {}] = [] } = {}] = [] } = {},
    ],
  }) {
    const header = getHeader(table);

    const rawData = table.children.map(
      ({ children }) => children.map(({ children: [{ value = '' } = {}] = [] }) => value)
    );

    const htmlTable = `
        <table>
            <thead>
                <tr>${rawData[0].map((d) => `<th>${d}</th>`).join('\n')}</tr>
            </thead>
            <tbody>
                ${rawData.slice(1).map((row) => `<tr>${row.map((d) => `<td>${d}</td>`).join('\n')}</tr>`).join('\n')}
            </tbody>
        </table>
        `;


    return {
      Title,
      Table: htmlTable,
      Data: rawData.slice(1).map(
        (row) => [row[header.X.column], row[header.Y.column]].map((x) => parseFloat(x))).map(([X, Y]) => ({
        X,
        Y,
      })),
      Axis: Object
        .entries(header)
        .reduce((o, [key, { label }]) => Object.assign(o, { [key]: label }), {}),
    };
  },
});
