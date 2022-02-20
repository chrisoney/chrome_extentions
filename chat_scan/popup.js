let removeUser = document.getElementById("removeUser");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

removeUser.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeUserFromChat,
  });
});

const removeUserFromChat = () => {
  const chatWindow = document.body.querySelector("[data-test-selector='chat-scrollable-area__message-container']");
  const chatMessages = chatWindow.querySelectorAll('.chat-line__message');
  chatMessages.forEach((msg) => {
    const author = msg.querySelector('.chat-author__display-name');
    if (author.textContent === 'creepin_lenny') {
      msg.remove();
    }
  })
}