// Recursively find the n:th parent
// Note: Requires jQuery.parent()
function parentN(element, n) {
    return n === 0 ? element : parentN(element.parent(), n - 1);
}

// Recursively find (and return) the first parent that matches the given selector
// Note: Requires jQuery.parent()
function findParentElement(element, targetSelector) {
    return element.is(targetSelector) || element.is('body') ? element : findParentElement(element.parent(), targetSelector);
}

module.exports = {
    isAt(location, regex) {
        const currentLocation = top.location.href.toString();

        if (regex) {
            const re = new RegExp(location, 'i');
            return currentLocation.match(re) !== null;
        } else {
            return currentLocation.toLowerCase().includes(location.toLowerCase());
        }
    },

    findParentElement,
    parentN,
};
