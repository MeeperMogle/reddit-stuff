const shadowbannedNames = [];

module.exports = {
    getShadowbannedNames() {
        return shadowbannedNames;
    },
    addShadowbannedName(name) {
        if (!shadowbannedNames.includes(name)) {
            shadowbannedNames.push(name);
        }
    },
};
