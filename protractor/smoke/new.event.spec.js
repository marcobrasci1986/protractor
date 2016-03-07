describe('Creating New Event', function () {
    describe('When clicking the button', function () {

        beforeEach(function () {
            browser.get('http://localhost:3000/#!/EventRatings');
        });

        it('should route to the new event page', function () {
            element(by.linkText('New Event')).click();

            // find a with innerText specified
            expect(browser.getCurrentUrl()).toMatch('EventRatings/new');
        });
    });
});