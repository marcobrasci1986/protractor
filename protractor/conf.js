/**
 * Specify the addres of webdriver and location of tests
 * @type {{seleniumAddress: string, specs: string[]}}
 */
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['./ratings/event.list.item.spec.js']
};