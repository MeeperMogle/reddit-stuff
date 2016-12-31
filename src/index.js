const utils = require('./utils');
const titleHiders = require('./titleHiders');
const redditUtils = require('./redditUtils');
const sidebar = require('./sidebar');
const subredditIcons = require('./subredditIcons');
const topic = require('./topic');
const sidenav = require('./sidenav');

const isAt = utils.isAt;

// Actions on all pages
sidenav.linksToSlashNew();
sidebar.initiateToggle();
redditUtils.hideElements();
redditUtils.formatTimestamps();
redditUtils.opacityDown();

// In any thread
if (isAt('/comments/')) {
    topic.hideAndShadowbanUsers();
    setInterval(() => {
        topic.hideAndShadowbanUsers();
    }, 500);

    topic.rootSeparator();
} else { // Not in any thread
    // On every frontpage...
    // ... hide globally hidden topics
    redditUtils.hideAllTopics(titleHiders.all);
    // ... initiate custom icons
    subredditIcons.initiateIcons();

    // On the w68 multi
    if (isAt('w68')) {
        // Remove duplicate image links
        setTimeout(() => {
            redditUtils.hideImageDuplicateTopics();
        }, 2000);

        redditUtils.hideAllTopics(titleHiders.w68);
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
