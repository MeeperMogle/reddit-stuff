module.exports = {
    initiateToggle() {
        $('.side').hide();
        $('body').keydown(e => {
            // §
            if (e.keyCode === 220) {
                $('.side').toggle();
            }
        });
    },
};
