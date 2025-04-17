# Schoology External Opener

A chrome extension that simplifies openining external tools in Schoology by automatically opening them in a new tab.

## Features

- Quick access button to open external tools in a new tab (Found in popup)
- Works on any Schoology page containing external tools
- Simple and user-friendly interface
- Automatic iframe detection and URL extraction

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files.
5. The extension should now be installed and ready to use.

## Usage

1. Navigate to any Schoology page containing external tools.
2. Click the extension icon in the Chrome toolbar.
3. Press the "Open External Link" button.
4. The external tool will open in a new tab.

## Files

- `manifest.json`: Extension configuration.
- `popup.html`: Extension popup interface.
- `popup.css`: Styling for the popup.
- `popup.js`: Extension functionality.

## Permissions

- `tabs`: Allows the extension to open new tabs.
- `scripting`: Allows the extension to execute JavaScript in the active tab.
- Access to `*.schoology.com` domains.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
