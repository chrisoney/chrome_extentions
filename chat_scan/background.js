chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ list: [] });
  console.log('Extension running.');
});