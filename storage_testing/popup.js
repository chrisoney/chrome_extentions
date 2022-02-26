let saveName = document.getElementById("saveName");
const display = document.getElementById('display');
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

chrome.storage.sync.get("list", ({ list }) => {
  list.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    display.appendChild(listItem);
  })
});

saveName.addEventListener('click', () => {
  
  chrome.storage.sync.get("list", ({ list }) => {
    const newName = document.getElementById('inputEle')
    chrome.storage.sync.set({ list: [...list, newName.value] });
    const listItem = document.createElement('li');
    listItem.innerText = newName.value;
    display.appendChild(listItem);
  });
})

// const setPageBackgroundColor = () => {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }