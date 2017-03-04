# Reddit stuff
Personal project of added userscript functionality to Reddit. Customisable currently only direct in source code. Some functionality assumes Reddit Enhancement Suite (RES) is installed in the browser.

Development environment based on freund17 `webpack-userscript` dev-server (https://github.com/freund17/webpack-userscript)

Features include
- Changing links to point to /new
- Toggle right sidebar with §
- Hide elements on the page
- Lowered opacity of elements on the page
- Formatted timestamp to show time in UTC
- Red lines separating root-comments in threads
- Hide topics based on name, globally and per subreddit
- Hide topics which link to duplicate images
- Append custom icons to /r/subreddit links for easy spotting
- Personal shadowbanner; completely hide the discussions created by ignored users
- Turn off your own ability to make root-comments (or any comment) in subreddits of your choice

Planned features

- Forced adherence to no-participation links
- Custom, automatically, no-participation subreddits
- Periodic refreshes/other handling of Reddit error codes
- Hide comments containing certain phrases, such as "3edgy5me"
- Disable posting/replying when the parent is 24h or older
- Visual adjusting of personal shadowbanner list


Specific, personal titles to hide

For the script to run with personalised titles to hide, a file `src/titleHiders.js` needs to be added, with `modules.exports` of an object which has keys that points to arrays. Example: `module.exports = {something: ['unwanted', 'titles']};`

How to setup a development environment?
=======================================

1. Make sure a recent version of nodejs and npm is installed on your system (https://nodejs.org)  
    Under linux you will most likely as well need to add a symlink in /usr/bin: node -> nodejs (`sudo ln -s /usr/bin/nodejs /usr/bin/node`)  
    Or add the bin-folder to your PATH
2. Install Ruby
    1. Windows: use the ruby installer (http://rubyinstaller.org/)
    2. Linux: `sudo apt-get install ruby`
3. Launch "getSetup.sh" (Linux) / "getSetup.sh" (Windows)
4. Install the "devLoader.user.js" userscript into Tampermonkey/Greasemonkey in your browser
    Change @match to fit your page

How do I start developing?
==========================

1. Launch "startDevServer.sh" (Linux) / "startDevServer.bat" (Windows)
2. Wait for the message: "bundle is now VALID"
3. Refresh the page in the browser to see the result
4. After changing a file restart from step 2

How do I pack my userscript for distribution?
=============================================

1. Edit userscript.txt to fit your needs
2. Launch "pack.sh" (Linux) / "pack.bat" (Windows)
3. Your userscript will be a single file with the name "bundle.user.js"


Troubleshooting
===============

The server doesn't notice a filechange
--------------------------------------
Most likely the maximum number of watchers is surpassed.
Try adding `fs.inotify.max_user_watches=524288` to /etc/sysctl.conf and execute `sysctl -p`.
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
