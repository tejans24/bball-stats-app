# bball-stats-app

## Description

This is a chrome extension that to see NBA standings, boxscores and player stats.

Bootstrap project for developing any kind Chrome extensions with all javascript features like [NPM packages](https://www.npmjs.com/), [Webpack](http://webpack.github.io/), [Babel](https://babeljs.io/), [React](https://facebook.github.io/react/) and almost everything you want.

**Turn this**

manifest.json
```json
{
  "content_scripts": [{
    "js": ["jquery.min.js", "jquery-spellchecker.min.js", "jquery-megamask.min.js", "jquery-scrolltie.min.js", "my-plugins.js", "app.js"],
    "css": ["app.css"]
  }]
}
```

**Into this**

manifest.json
```json
{"content_scripts": [{"js": ["app.js"]}]}
```

Run `npm install jquery jquery-spellchecker jquery-megamask jquery-scrolltie --save`

app.js
```js
import 'jquery'
import 'jquery-spellchecker'
import 'jquery-megamask'
import 'jquery-scrolltie'
import './my-plugins'

import "./app.css"

// Here start my application
$('input').spellchecker()
```

## Extension features support

- [Browser action](https://developer.chrome.com/extensions/browserAction)
- [Page action](https://developer.chrome.com/extensions/pageAction)
- [Background Pages (Scripts)](https://developer.chrome.com/extensions/background_pages)
  - Support both background scripts or page
- [Content scripts](https://developer.chrome.com/extensions/content_scripts)
  - Supports only scripts. Stylesheets can be easily made and use with webpack
- [Override Pages](https://developer.chrome.com/extensions/override)
  - You can customize **newtab**, **history**, or **bookmarks**

## Installation

1. `npm install`
2. `npm install gulp -g`
  - *if there is problem with missing gulpfile, uninstall `npm uninstall gulp -g` and install again. You have probably old non-babel compatible version*

## Usage

- Whole repository (package) is simple example extension.
- Check `src/manifest.json` for basic usage of background script, content script, action popup and chrome url overrides.
- All scripts and/or html pages from manifest.json are piped through preprocessor and prepared for using all features.
- When your extension does exactly what you want, you can run `gulp -p` for creating production `.crx` build.
- All your codebase belongs only to `src/` directory
- In your scripts you can use **npm packages, babel, react (jsx), styles (with preprocessors) and any modern javascript feature** you know.

## How to run development environment

You should do this before editing any code to see how it works.

1. run `gulp` which will start webpack-dev-server
2. in Chrome open `chrome://extensions/`
3. check `Developer mode`
4. click on `Load unpacked extension`
5. add REPOSITORY_DIRECTORY/build
6. Now you can check background script via link in extension `Inspect views: background page` and you will see some messages in console
7. Navigate to any http or **https** page and open development tools and console. You can see messages from content scripts.
8. Find extension icon (puzzle image) right from adress bar.
  1. Click with left mouse button to show html content
  2. Click with right mouse button and select `Inspect Popup`. Then in console you can see some messages
9. You can edit your codebase with almost 100% hot/full reload support.

## How to build extension

1. run `gulp -p`
2. It will compile scripts, styles and other assets into release/build/
3. It will make chrome extension into release/build.crx with certificate release/build.pem

## Licence

Webpack Chrome Extension is released under the [MIT License](http://www.opensource.org/licenses/MIT).
