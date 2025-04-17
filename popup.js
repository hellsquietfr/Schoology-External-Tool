document.getElementById('openSchoologyButton').addEventListener('click', async () => {
    try {
        // Get the active tab
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (!tab) {
            throw new Error('No active tab found');
        }

        // Execute script in the active tab to find and open the iframe URL
        const result = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                const iframeSrc = document.querySelector('iframe[src*="/external_tool/"]')?.src;
                if (!iframeSrc) {
                    throw new Error('No external tool found on this page');
                }
                window.open(iframeSrc, '_blank');
                return true;
            }
        });

        if (!result?.[0]?.result) {
            throw new Error('Failed to open external tool');
        }

    } catch (error) {
        console.error('Error:', error.message);
        // You might want to show this error to the user in the popup
        alert(`Error: ${error.message}`);
    }
});