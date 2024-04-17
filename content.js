function invert() {
  const css = "html, img, video { filter: invert(); }";
  const style = document.createElement("style");
  style.id = "invert-page";
  style.textContent = css;
  document.head.appendChild(style);
}

invert();
