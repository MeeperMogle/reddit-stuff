module.exports = {
    linksToSlashNew() {
        // Make these links in the sidenav point to "new" instead
        const toSlashNew = ['/me/m/w68/'];
        toSlashNew.forEach(link => {
            $(`.listing-chooser a[href="${link}"]`).attr('href', `${link}new/`);
        });
    },
};
