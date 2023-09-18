// background.js

// GET request blocking for Reddit - all GETs which contain keyword will be blocked
function blockRequest(details) {
  // Checking keywords "nsfw-blocking"
  if (details.url.includes("nsfw-blocking")) {
    return { cancel: true }; // Cancel request
  }
}

// Adding chrome.webRequest API listener
chrome.webRequest.onBeforeRequest.addListener(
  blockRequest,
  { urls: ["<all_urls>"] }, // Processing all URLs with the listener for adding "?" symbol
  ["blocking"]
);

// Receiving messages from content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'reloadPage') {
    chrome.tabs.update(sender.tab.id, { url: request.url });
  }
});