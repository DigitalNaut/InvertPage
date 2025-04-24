/**
 * Register the page action.
 * Execute the content script when the page action is clicked.
 */
function registerPageAction() {
  browser.pageAction.onClicked.addListener(async ({ id }) => {
    const { result } = await browser.scripting.executeScript({
      target: { tabId: id },
      files: ["content.js"],
    });

    if (result) {
      console.log("Unexpected result:", result);
    }

    const response = await browser.runtime.sendMessage({
      action: "runInversion",
      id,
    });

    if (response) {
      console.log("Response:", response);
    }
  });
}

registerPageAction();
