describe('Event list details:', function () {
    describe('When clicking on an event', function () {

        var name;

        beforeEach(function () {
            // .get() -> protactor knows that he has to wait for all
            // the angular stuff to wait
            browser.get('http://localhost:3000/#!/EventRatings');
            var firstElement = element.all(by.binding('name')).first();

            firstElement.getText().then(function (text) {
                name = text;
            });

            firstElement.click();
            // wait for all of angular stuff te finish as a result of the click
            browser.waitForAngular();
        });

        it('Should navigate to the details page', function () {
            var header = element(by.binding('name'));
            // match -> regex
            expect(header.getText()).toMatch('Dream Theater concert');
        });

        it('Should update url', function () {
            expect(browser.getCurrentUrl()).toMatch('EventRatings/');
        });
    });
});