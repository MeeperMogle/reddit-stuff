module.exports = {
    initiateIcons() {
        // Add the specified icon after links to /r/subreddit
        const icons = [
            {
                subreddit: 'cynicalbritofficial',
                iconUrl: 'http://i.imgur.com/RQNQJlp.png',
            },
            {
                subreddit: 'technology',
                iconUrl: 'http://i.imgur.com/5ERrWVv.png',
            },
            {
                subreddit: 'Games',
                iconUrl: 'http://i.imgur.com/qqbE3NA.png',
            },
        ];

        let styles = '<style>';

        icons.forEach(icon => {
            $(`a.subreddit:contains(${icon.subreddit})`).addClass(`${icon.subreddit}CustomIcon`);

            styles += `.${icon.subreddit}CustomIcon:after {content:url("${icon.iconUrl}");} `;
        });

        $('head').append(`${styles} </style>`);
    },
};
