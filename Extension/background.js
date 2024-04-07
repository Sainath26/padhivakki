chrome.contextMenus.create({
  id: "savethisinyourlocalfile",
  title: "Save this in your local file",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  let Text = [
    { "Website Link": item.pageUrl },
    { "Selected Text": item.selectionText },
  ];
  console.log(Text);
});
