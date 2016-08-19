import tofex from 'tofex';
import {submodule} from 'tofex/submodule';
import value from 'tofex/submoduleWithDefault';

describe(`test setup`, function() {
    it(`should succesfully run`, function() {
        expect(tofex()).to.equal(true);
    });

    it(`should include sinon in tests`, function() {
        let spy = sinon.spy();
        expect(spy.callCount).to.equal(0);
    });

    it(`should be able to import a submodule`, function() {
        expect(submodule()).to.equal(11);
    });

    it(`should be able to import a submodule with a default export`, function() {
        expect(value).to.equal(111);
    });

    it(`should make eslint react to disallowed code`, function() {
        console.log(`eslint warns about console usage`);
    });
});