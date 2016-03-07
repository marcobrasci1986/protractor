describe('Adding a new Event', function () {
    describe('When the form is empty', function () {
        var createButton;
        beforeEach(function () {
            browser.get('http://localhost:3000/#!/EventRatings/new');
            createButton = element(by.buttonText('Create'));
        });

        it('should disable btn Create' , function () {
            var css = createButton.getAttribute('class');
            expect(css).toMatch('disabled');
        });

        it('should enable btn Create when form is valid', function () {
            // enter text in input field
            element(by.model('event.name')).sendKeys('A Sample Event');
            var css = createButton.getAttribute('class');

            expect(css).not.toMatch('disabled');
        });

        it('should add event when saving the form', function () {
            var eventTitle = 'Event Name';

            element(by.model('event.name')).sendKeys(eventTitle);
            createButton.click();

            // wait for angular to redirect after an event is created
            browser.waitForAngular();
            var list = element.all(by.binding('name'));
            expect(list.getText()).toMatch(eventTitle);
        });
    });
});