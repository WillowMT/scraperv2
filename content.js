function getAllImages() {
    const images = Array.from(document.getElementsByTagName('img')).map(img => img.src);
    return images;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getImages") {
        sendResponse({ images: getAllImages() });
    }
});
