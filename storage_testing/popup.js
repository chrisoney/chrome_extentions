const saveName = document.getElementById("saveName");
const display = document.getElementById('display');
const inputElement = switchElement.querySelector('.checkbox');

if (inputElement) {
  inputElement.addEventListener('click', (e) => {
    console.log(e.target);
  })
}  
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
    const listItem = buildListItem(item)
    display.appendChild(listItem);
  })
});

saveName.addEventListener('click', () => {
  
  chrome.storage.sync.get("list", ({ list }) => {
    const newName = document.getElementById('inputEle')
    chrome.storage.sync.set({ list: [...list, newName.value] });
    const listItem = buildListItem(newName.value)
    display.appendChild(listItem);
  });
})

// const setPageBackgroundColor = () => {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

const buildListItem = (val) => {
  const listItem = document.createElement('li');
  listItem.innerText = val;
  return listItem;
}