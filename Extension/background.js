chrome.contextMenus.create({
  id: "savethisinyourlocalfile",
  title: "Save this in your local file",
  contexts: ["selection"],
});

async function sendMessageToServer(data) {
  const url = "http://127.0.0.1:3000/data";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  console.log("Server response:", responseData);
}

chrome.contextMenus.onClicked.addListener((item, tab) => {
  const Text = [
    { "Website Link": item.pageUrl },
    { "Selected Text": item.selectionText },
  ];
  sendMessageToServer(Text);
  console.log(Text);
});
