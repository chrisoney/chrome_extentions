let changeColor = document.getElementById("changeColor");
let saveName = document.getElementById("saveName");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

saveName.addEventListener('click', () => {
  const test = document.getElementById('display')
  chrome.storage.sync.get("list", ({ list }) => {
    console.log(test, list)
  });
})

const setPageBackgroundColor = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}