const shadowbanner = require('./shadowbanner');

module.exports = {
    rootSeparator() {
        $('.sitetable.nestedlisting > div > .clearleft').css('border-bottom', '2px solid darkred');
    },
    personallyShadowbanTheseUsers(toBan) {
        toBan.each(function () {
            const username = $(this).html();
            shadowbanner.addShadowbannedName(username);
        });
    },
    hideTheseUserComments(userNameArray, insteadRemove) {
        userNameArray.forEach(username => {
            if (insteadRemove) {
                $(`.author:contains(${username})`).parent().parent().parent().remove();
            } else {
                $(`.author:contains(${username})`).parent().parent().parent().hide();
            }
        });
    },
    getIgnoredUsernames() {
        return $('.userTagLink:contains(ignored)').parent().siblings('.author');
    },
};
