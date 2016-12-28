const utils = require('./utils');

module.exports = {
    hideAllTopics(titlesArray) {
        titlesArray.forEach(title => {
            const re = new RegExp(title, 'i');

            $('a.title').each(function () {
                if ($(this).html().match(re)) {
                    utils.parentN($(this), 3).hide();
                }
            });
        });
    },
};
