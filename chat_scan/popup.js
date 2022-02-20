let addToListButton = document.getElementById("addToList");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

addToListButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addToList,
  });
});

const addToList = () => {
  const input = document.getElementById('usernameInput');
  console.log(addToListButton)
  if (input.value === '') return;
  chrome.storage.sync.get("list", ({ list }) => {
    if (!list) list = [];
    chrome.storage.sync.set({ list: [...list, input.value] });
    const listEle = document.querySelector('.userList')
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    listEle.appendChild(listItem);
  });
}

const removeUsersFromChat = () => {
  const chatWindow = document.body.querySelector("[data-test-selector='chat-scrollable-area__message-container']");
  const chatMessages = chatWindow.querySelectorAll('.chat-line__message');
  chatMessages.forEach((msg) => {
    const author = msg.querySelector('.chat-author__display-name');
    if (author.textContent === 'creepin_lenny') {
      msg.remove();
    }
  })
}