import replacemodulename from 'replacemodulename';

describe('test setup', function() {
    it('should succesfully run', function() {
        expect(replacemodulename()).to.equal(true);
    });
    it('should include sinon in tests', function() {
        let spy = sinon.spy();
        expect(spy.callCount).to.equal(0);
    });
});