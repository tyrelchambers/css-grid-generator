export const buildCssSnippet = (css: any) => {
  let wrapper = document.createElement("div");

  for (const key in css) {
    if (Object.prototype.hasOwnProperty.call(css, key)) {
      const element = document.createElement("div");
      element.innerHTML = `<div class="flex gap-4"><span class="text-indigo-300 font-semibold">${key}</span> <span class="text-gray-200">{</span></div> `;
      wrapper.appendChild(element);

      // this is for the properties of each css code block
      for (const subKey in css[key]) {
        const lastProperty = Object.keys(css[key]).pop();

        if (Object.prototype.hasOwnProperty.call(css[key], subKey)) {
          const subElem = document.createElement("div");
          subElem.classList.add("italic");
          subElem.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-indigo-400">${subKey}</span>: <span class="text-gray-300">${css[key][subKey]}</span>; `;
          element.appendChild(subElem);

          if (subKey === lastProperty) {
            element.innerHTML += `<span class="text-gray-300">}</span>`;
          }
        }
      }
    }
  }
  return wrapper;
};
