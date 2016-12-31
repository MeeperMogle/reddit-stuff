module.exports = {
    initiateIcons() {
        const icons = [
            {
                subreddit: 'cynicalbritofficial',
                class: 'cynicalbrit',
                iconUrl: 'http://i.imgur.com/RQNQJlp.png',
            },
            {
                subreddit: 'technology',
                class: 'technologyReddit',
                iconUrl: 'http://i.imgur.com/5ERrWVv.png',
            },
            {
                subreddit: 'Games',
                class: 'gamesReddit',
                iconUrl: 'http://i.imgur.com/qqbE3NA.png',
            },
        ];

        let styles = '<style>';

        icons.forEach(icon => {
            $(`a.subreddit:contains(${icon.subreddit})`).addClass(icon.class);

            styles += `.${icon.class}:after {content:url("${icon.iconUrl}");} `;
        });

        $('head').append(`${styles} </style>`);
    },
};
