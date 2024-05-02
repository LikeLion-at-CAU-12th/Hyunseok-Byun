import DOM from "./DOM.js";

class Image extends DOM {
  constructor(innerText, className) {
    super("img", innerText, className);
  }
}

export default Image;
