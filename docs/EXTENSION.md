# Browser Extension Prototype

The `extension/` folder contains a minimal Manifest V3 popup prototype.

## Local Test

1. Run:

   ```bash
   npm run build:release
   ```

2. Open a Chromium-based browser.
3. Go to `chrome://extensions`.
4. Enable Developer mode.
5. Click Load unpacked.
6. Select:

   `dist/ai-agent-debug-kit/extension`

The release builder copies `core.js` into the extension folder so the popup can run without reaching outside its extension package.

## Current Extension Scope

The prototype:

- accepts pasted logs
- loads a demo log
- shows event/tool/error counts
- shows risk flags

It does not request browser permissions.

## Before Store Submission

Required before Chrome Web Store submission:

- convert SVG icon into required PNG sizes if the store rejects SVG
- test unpacked extension manually
- add privacy policy page
- confirm no remote code loading
- confirm no unnecessary permissions
- prepare store screenshots
- prepare clear support/contact page

Do not submit to a store until account/payment requirements are reviewed by the user.
