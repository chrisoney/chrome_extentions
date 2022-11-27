let addLines = document.getElementById("addLines");

addLines.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addLinesToPage,
  });
});

const addLinesToPage = () => {
  // const leftLine = document.createElement('div');
  // leftLine.style = "position: sticky; min-width: 3px; height: 100%; background-color: white; z-index: 500; left: 10%;";
  // const rightLine = document.createElement('div');
  // rightLine.style = "position: sticky; min-width: 3px; height: 100%; background-color: white; z-index: 500; right: 10%;";
  // document.body.appendChild(leftLine);
  // document.body.appendChild(rightLine);
}