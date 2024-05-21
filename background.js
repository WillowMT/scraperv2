chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "downloadImages") {
        message.images.forEach(image => {
            chrome.downloads.download({ url: image });
        });
    }
});
