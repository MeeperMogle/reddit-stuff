const $ = require('jquery');
const utils = require('./utils');
const titleHiders = require('./titleHiders');

const isAt = utils.isAt;
const parentN = utils.parentN;
const findParentElement = utils.findParentElement;

// Menu-around actions
$('a[href="/me/m/w68/"]').attr('href', '/me/m/w68/new/');

if (isAt('w68')) {
    // expando-button-duplicate
    setTimeout(function () {
        $('.expando-button-duplicate').each(function () {
            parentN($(this), 2).hide();
        });
    }, 2000);

    console.log('titleHiders["w68"]: ', titleHiders["w68"]);
}
