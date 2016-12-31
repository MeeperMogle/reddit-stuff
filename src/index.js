const utils = require('./utils');
const titleHiders = require('./titleHiders');
const redditUtils = require('./redditUtils');
const sidebar = require('./sidebar');
const subredditIcons = require('./subredditIcons');
const topic = require('./topic');

const isAt = utils.isAt;
const hideAllTopics = redditUtils.hideAllTopics;

// Menu-around actions (export to sidenav.js)
$('a[href="/me/m/w68/"]').attr('href', '/me/m/w68/new/');

// Actions on all pages
hideAllTopics(titleHiders.all);
sidebar.initiateToggle();
redditUtils.hideElements();
redditUtils.formatTimestamps();
subredditIcons.initiateIcons();
redditUtils.opacityDown();

// In any thread
if (isAt('/comments/')) {
    topic.hideAndShadowbanUsers();
    setInterval(() => {
        topic.hideAndShadowbanUsers();
    }, 500);

    topic.rootSeparator();
} else { // Not in any thread
    // On the w68 multi
    if (isAt('w68')) {
        // Remove duplicate image links
        setTimeout(() => {
            redditUtils.hideImageDuplicateTopics();
        }, 2000);

        hideAllTopics(titleHiders.w68);
    }
}

// NO PARTICIPATION
// custom no-contribution subreddits
// no-contributions-enforcement
// - no replies, no voting, no reporting, ...

// ERROR CODES
// error code: 50       refresh interval

// UNFRUITFUL DISCUSSIONS
// hide comments, and trees, containing certain phrases

// OLD TOPICS
// remove "reply"-links to comments > 1 day
// remove reply-textbox in threads > 1 day

// PERSONAL SHADOWBANNER
// completely remove Ignored users' posts and topics [X]
// - personal shadowbanner; localStorage [X]
// - when seeing an Ignored user, add it if necessary [X]
// - export as csv, insert as csv
