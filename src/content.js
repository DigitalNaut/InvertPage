/**
 * @param {string} id
 * @returns {boolean} `true` if the inversion was removed
 */
function removeInversion(id) {
  if (!id) throw new Error("id is required");

  const prevEl = Array.from(document.head.childNodes).find(
    (node) => node.id === id
  );

  if (prevEl) {
    document.head.removeChild(prevEl);
    return true;
  }

  return false;
}

/**
 * Add the inversion style
 * @param {string} id
 */
function addInversion(id) {
  if (!id) throw new Error("id is required");

  const styleEl = document.createElement("style");
  styleEl.id = id;
  styleEl.textContent = "html, img, video { filter: invert(); }";

  document.head.appendChild(styleEl);
}

/**
 * Run the inversion
 * @param {string} id
 */
function runInversion(id) {
  if (!id) throw new Error("id is required");

  const wasRemoved = removeInversion(id);

  if (!wasRemoved) {
    addInversion(id);
  }

  console.log("Page Inversion was", wasRemoved ? "removed" : "added");
}

function main() {
  try {
    runInversion("invert-page");
  } catch (e) {
    console.error("Error running inversion:", e);
  }
}

main();
