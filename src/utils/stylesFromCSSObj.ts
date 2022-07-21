export const stylesFromCSSObj = (css: any) => {
  let styles = "";

  for (const key in css) {
    if (Object.prototype.hasOwnProperty.call(css, key)) {
      styles += `${key} { `;

      for (const subKey in css[key]) {
        const lastProperty = Object.keys(css[key]).pop();

        if (Object.prototype.hasOwnProperty.call(css[key], subKey)) {
          const element = css[key][subKey];

          styles += `${subKey}: ${element}; `;

          if (subKey === lastProperty) {
            styles += "}";
          }
        }
      }
    }
  }
  return styles;
};
