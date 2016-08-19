import replacemodulename from 'replacemodulename';
import {submodule} from 'replacemodulename/submodule';
import value from 'replacemodulename/submoduleWithDefault';

describe('test setup', function() {

    it('should succesfully run', function() {
        expect(replacemodulename()).to.equal(true);
    });

    it('should include sinon in tests', function() {
        let spy = sinon.spy();
        expect(spy.callCount).to.equal(0);
    });

    it('should be able to import a submodule', function() {
        expect(submodule()).to.equal(11);
    });

    it('should be able to import a submodule with a default export', function() {
        expect(value).to.equal(111);
    });
});