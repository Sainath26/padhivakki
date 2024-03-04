chrome.contextMenus.create({
  id: "savethisinyourlocalfile",
  title: "Save this in your local file",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  console.log(item.selectionText);
});
