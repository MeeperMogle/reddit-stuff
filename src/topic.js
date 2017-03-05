const shadowbanner = require('./shadowbanner');
const utils = require('./utils');

const topicExports = module.exports = {};

topicExports.rootSeparator = function () {
    $('.sitetable.nestedlisting > div > .clearleft').css('border-bottom', '2px solid darkred');
};

topicExports.personallyShadowbanTheseUsers = function (toBan) {
    toBan.each(function () {
        const username = $(this).html();
        shadowbanner.addShadowbannedName(username);
    });
};

topicExports.hideTheseUserComments = function (userNameArray, insteadRemove) {
    userNameArray.forEach(username => {
        if (insteadRemove) {
            $(`.author:contains(${username})`).parent().parent().parent().remove();
        } else {
            $(`.author:contains(${username})`).parent().parent().parent().hide();
        }
    });
};

topicExports.getIgnoredUsernames = function () {
    return $('.userTagLink:contains(ignored)').parent().siblings('.author');
};

topicExports.hideAndShadowbanUsers = function () {
    topicExports.hideTheseUserComments(shadowbanner.getShadowbannedNames(), true);
    topicExports.personallyShadowbanTheseUsers(topicExports.getIgnoredUsernames());
};

topicExports.blockRootCommentIfOnAnyOfTheseSubreddits = function (listArray) {
    listArray.forEach(subreddit => {
        if (utils.isAt('/r/' + subreddit.toLowerCase())) {
            $('.commentarea > form.usertext').hide();
        }
    });
};

topicExports.blockAnyCommentIfOnAnyOfTheseSubreddits = function (listArray) {
    listArray.forEach(subreddit => {
        if (utils.isAt('/r/' + subreddit.toLowerCase())) {
            $('.commentarea > form.usertext, .reply-button').remove();
        }
    });
};
