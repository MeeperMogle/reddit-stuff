const $ = require('jquery');
const utils = require('./utils');
const titleHiders = require('./titleHiders');
const redditUtils = require('./redditUtils');

const isAt = utils.isAt;
const parentN = utils.parentN;
const findParentElement = utils.findParentElement;
const hideAllTopics = redditUtils.hideAllTopics;

// Menu-around actions
$('a[href="/me/m/w68/"]').attr('href', '/me/m/w68/new/');

// Actions on all pages
hideAllTopics(titleHiders.all);

if (isAt('w68')) {
    // Remove duplicate image links
    setTimeout(function () {
        $('.expando-button-duplicate').each(function () {
            parentN($(this), 2).hide();
        });
    }, 2000);

    hideAllTopics(titleHiders.w68);
}
