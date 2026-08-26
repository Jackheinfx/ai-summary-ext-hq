# ai-summary-ext-hq

MV3 extension: one click, tl;dr of any article

Built for my own use; public in case it helps someone.

## Installation

```bash
# chrome://extensions -> load unpacked -> select this folder
# set your API base + key on the options page
```

## Features

- Manifest V3 service worker, no build step
- Options page for API base and key
- Popup shows a 5-bullet summary
- Reads the page, extracts main text, sends to your endpoint

## Usage

```bash
# open any article, click the icon, get a 5-bullet summary
```

## Project structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   ├── dependabot.yml
│   └── pull_request_template.md
├── docs/
│   ├── development.md
│   ├── roadmap.md
│   └── usage.md
├── examples/
│   └── quickstart.md
├── src/
│   └── config.js
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── SECURITY.md
├── background.js
├── manifest.json
├── options.html
├── popup.html
└── popup.js
```

## Development

```bash
npm install
npm test
```

## License

MIT. Do whatever you want.
