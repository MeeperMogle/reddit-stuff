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
    hideElements() {
        const elementSelectors = ['.score', '.userkarma', '.karma', '.del-button'];
        $(elementSelectors.join(', ')).hide();
    },
    opacityDown() {
        const elementSelectors = ['.post-sharing-button', '.redditSingleClick', '.report-button', '.give-gold'];
        $(elementSelectors.join(', ')).css('opacity', '0.2');
    },
    formatTimestamps() {
        // Function underneath based wholly on http://userstyles.org/styles/77357
        const css = '.tagline time:after {\ncontent : " ("  attr(title)  ")";\n}';
        if (typeof GM_addStyle !== 'undefined') {
            GM_addStyle(css);
        } else if (typeof PRO_addStyle !== 'undefined') {
            PRO_addStyle(css);
        } else if (typeof addStyle !== 'undefined') {
            addStyle(css);
        } else {
            const node = document.createElement('style');
            node.type = 'text / css';
            node.appendChild(document.createTextNode(css));
            const heads = document.getElementsByTagName('head');
            if (heads.length > 0) {
                heads[0].appendChild(node);
            } else {
                // no head yet, stick it whereever
                document.documentElement.appendChild(node);
            }
        }

        $('time').each(function () {
            this.setAttribute('title', new Date(this.getAttribute('datetime')).toISOString().split('T')[1].split('.')[0]);
        });
    },
};
