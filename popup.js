document.getElementById('openSchoologyButton').addEventListener('click', async () => {
    // Get the active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Execute script in the active tab to find and open the iframe URL
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const iframeSrc = document.querySelector('iframe[src*="/external_tool/"]')?.src;
            if (iframeSrc) {
                window.open(iframeSrc, '_blank');
            }
        }
    });
});