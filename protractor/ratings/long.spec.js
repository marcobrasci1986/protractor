describe('Very long test', function () {
    beforeEach(function () {
        browser.get('http://localhost:3000/#!/EventRatings');
        browser.driver.sleep(3000);
    });

    it('should check something', function () {
        expect(true).toBeTruthy();
    });
    it('should check something', function () {
        expect(false).toBeFalsy();
    });
});