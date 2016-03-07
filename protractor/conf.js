/**
 * Specify the address of webdriver and location of tests
 *
 * Specify suite(s) -> runs in order (remove data, create data, verify data)
 * protractor conf.js --suite=smoke
 * protractor conf.js --suite=smoke,longRunning
 */
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['./**/*.spec.js'],

    suites: {
        smoke : './smoke/*.spec.js',
        longRunning : './ratings/*.spec.js',
        create : './smoke/create.new.event.spec.js',
        full: './**/*.spec.js'
    }
};