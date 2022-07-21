export const stylesFromCSSObj = (css) => {
  let styles = "";

  // get last property in object

  for (const key in css) {
    if (Object.prototype.hasOwnProperty.call(css, key)) {
      styles += `${key} { `;

      for (const subKey in css[key]) {
        const lastProperty = Object.keys(css[key]).pop();

        if (Object.prototype.hasOwnProperty.call(css[key], subKey)) {
          const element = css[key][subKey];

          if (subKey !== lastProperty) {
            styles += `${subKey}: ${element}; `;
          } else {
            styles += `${subKey}: ${element}; } `;
          }
        }
      }
    }
  }

  console.log(styles);
  return styles;
};
