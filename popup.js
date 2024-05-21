document.getElementById('download').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "getImages" }, (response) => {
                chrome.runtime.sendMessage({ action: "downloadImages", images: response.images });
            });
        });
    });
});
