browser.pageAction.onClicked.addListener(async ({ id }) => {
  const { result } = await browser.scripting.executeScript({
    target: { tabId: id },
    files: ["content.js"],
  });

  if (result) {
    console.log("[PageAction/background/onClicked] Unexpected result:", result);
  }
});
