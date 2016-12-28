const $ = require('jquery');
const utils = require('./utils');
const titleHiders = require('./titleHiders');
const redditUtils = require('./redditUtils');
const sidebar = require('./sidebar');
const subredditIcons = require('./subredditIcons');

const isAt = utils.isAt;
const parentN = utils.parentN;
const findParentElement = utils.findParentElement;
const hideAllTopics = redditUtils.hideAllTopics;

// Menu-around actions (export to sidenav.js)
$('a[href="/me/m/w68/"]').attr('href', '/me/m/w68/new/');

// Actions on all pages
hideAllTopics(titleHiders.all);
sidebar.initiateToggle();
redditUtils.hideElements();
redditUtils.formatTimestamps();
subredditIcons.initiateIcons();

if (isAt('w68')) {
    // Remove duplicate image links
    setTimeout(function () {
        $('.expando-button-duplicate').each(function () {
            parentN($(this), 2).hide();
        });
    }, 2000);

    hideAllTopics(titleHiders.w68);
}
