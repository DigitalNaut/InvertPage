browser.pageAction.onClicked.addListener((tab) => {
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
