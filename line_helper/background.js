chrome.runtime.onConnect.addListener(() => {
  const leftLine = document.createElement('div');
  leftLine.id = "leftLine"
  const rightLine = document.createElement('div');
  rightLine.id = "rightLine"
  document.body.appendChild(leftLine);
  document.body.appendChild(rightLine);
});