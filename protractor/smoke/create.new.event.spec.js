var CreatePage = require('./pages/create.event.page.js');
var ListPage = require('./pages/event.list.page.js');

describe('Adding a new Event', function () {
    describe('When the form is empty', function () {

        var createPage = new CreatePage();
        var listPage = new ListPage();

        beforeEach(function () {
            browser.get('http://localhost:3000/#!/EventRatings/new');
        });

        it('should disable btn Create' , function () {
            var css = createPage.getButtonClasses();
            expect(css).toMatch('disabled');
        });

        it('should disable btn Create when maxlength is exceeded' , function () {
            createPage.setName('A Sample Event A Sample Event A Sample Event A Sample Event');
            var css = createPage.getButtonClasses();
            expect(css).toMatch('disabled');
        });

        it('should enable btn Create when form is valid', function () {
            // enter text in input field
            createPage.setName('A Sample Event');
            var css = createPage.getButtonClasses();

            expect(css).not.toMatch('disabled');
        });

        it('should add event when saving the form', function () {
            var eventTitle = 'Event Name';

            //element(by.model('event.name')).sendKeys(eventTitle);
            createPage.setName(eventTitle);
            createPage.saveData();

            // wait for angular to redirect after an event is created
            browser.waitForAngular();
            expect(listPage.getNameTexts()).toMatch(eventTitle);
        });
    });
});