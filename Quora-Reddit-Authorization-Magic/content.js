// content.js

// Adding "?" symbol to the end of the URL for Quora
function addQuestionMarkAndReload() {
  const currentUrl = window.location.href;

  // Checking the URL for containing Quora's domain and exclude the presence of an already added "?" symbol
  if (currentUrl.includes("quora.com") && !currentUrl.includes("?")) {
    const newUrl = currentUrl + "?";
    
    // Sending command to extenstion for refreshing a page with new URL with "?" symbol
    chrome.runtime.sendMessage({ action: 'reloadPage', url: newUrl });
  }
}

// Running a function
addQuestionMarkAndReload();