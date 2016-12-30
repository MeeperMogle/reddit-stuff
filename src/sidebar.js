module.exports = {
    initiateToggle() {
        $('.side').hide();
        $('body').keydown(function (e) {
            // §
            if (e.keyCode === 220) {
                $('.side').toggle();
            }
        });
    },
};
