let shadowbannedNames;
const storageName = 'redditStuffShadowbannerNames';

module.exports = {
    getShadowbannedNames() {
        try{
	        shadowbannedNames = JSON.parse(localStorage.getItem(storageName)).names;
		} catch(e) {delete shadowbannedNames;}
        if (!shadowbannedNames) {
            console.log('Initiating empty shadow banner list');
            localStorage.setItem('redditStuffShadowbannerNames', JSON.stringify({
                names: [],
            }));
            shadowbannedNames = JSON.parse(localStorage.getItem(storageName)).names;
        }
        return shadowbannedNames;
    },
    addShadowbannedName(name) {
        if (!shadowbannedNames.includes(name)) {
            shadowbannedNames.push(name);
            localStorage.setItem(storageName, JSON.stringify({
                names: shadowbannedNames,
            }));
        }
    },
};
