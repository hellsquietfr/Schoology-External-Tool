document.getElementById('openSchoologyButton').addEventListener('click', async () => {
    const errorContainer = document.getElementById('errorContainer');
    const errorElement = document.getElementById('errorMessage');
    
    // Reset error states
    errorElement.style.display = 'none';
    errorContainer.style.display = 'none';
    errorElement.textContent = '';

    try {
        // Get the active tab
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // Check if we're on a valid page
        if (!tab.url.includes('schoology.com')) {
            errorElement.textContent = 'Please open a Schoology page first. This extension only works on Schoology.';
            errorElement.style.display = 'block';
            errorContainer.style.display = 'block';
            return;
        }

        if (!tab) {
            throw new Error('No active tab found. Please refresh the page and try again.');
        }

        // Execute script in the active tab
        try {
            const result = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    const iframeSrc = document.querySelector('iframe[src*="/external_tool/"]')?.src;
                    if (!iframeSrc) {
                        throw new Error('No assignment found. Please open a Schoology assignment page first.');
                    }
                    window.open(iframeSrc, '_blank');
                    return true;
                }
            });

            if (!result?.[0]?.result) {
                throw new Error('Could not open the assignment. Please try again.');
            }

        } catch (scriptError) {
            errorElement.textContent = 'Cannot access this page. Please make sure you are on a Schoology assignment.';
            errorElement.style.display = 'block';
            errorContainer.style.display = 'block';
        }

    } catch (error) {
        errorElement.textContent = error.message;
        errorElement.style.display = 'block';
        errorContainer.style.display = 'block';
    }
});