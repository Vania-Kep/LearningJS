const calculateSquere = require('../calculate-squere.js');
const expect = require('chai').expect;
//import {expect as expect} from 'chai';

describe('calculateSquere', function () {
    it('should return 4 if passed 2', function (done) {
        calculateSquere(2, function (error, result) {
            console.log('callback gets called.');
            expect(result).to.equal(4);
            done();
        });
    });

    it('it should return error if passed string', function (done) {
        calculateSquere('string', function (error, result) {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Argument of type number is expected');
            done();
        });
    });
});