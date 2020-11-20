//const assert = require('assert'); // replace using chai.assert
const expect = require('chai').expect
const assert = require('chai').assert;
const should = require('chai').should;
const sinon = require('sinon');

// instead of assert, use chai
describe("Math test", () => {
    it("add two number", () => {
         //assert.equal(1, 2)   
         expect(1).to.eq(1);
         expect(1).not.eq(2);
    })

    it("fake/mock/stub", () => {
        // no return values
        const businessLogicFunc = sinon.fake();
        // some code flow
        businessLogicFunc(); // args passed is not a concern here
        expect(businessLogicFunc.called).eq(true);
   })


   it("fake/mock/stub with args check", () => {
    // no return values
    const businessLogicFunc = sinon.fake();
    // some code flow
    businessLogicFunc({card: '4342232323232', amount: 100}); // is credit card info passed/arg test
    expect(businessLogicFunc.called).eq(true);
    expect(businessLogicFunc.calledWith({card: '4342232323232', amount: 100})).eq(true)
    })

    xit("fake/mock/stub with with return check", () => {
        // no return values
        const businessLogicFunc = sinon.fake().returns(true); // stub
        // some code flow
        const success = businessLogicFunc({card: '4342232323232', amount: 100}); // is credit card info passed/arg test
        expect(businessLogicFunc.called).eq(true);
        expect(businessLogicFunc.calledWith({card: '4342232323232', amount: 100})).eq(true)
        expect(success).eq(true);
    })


    it("spy ", () => {

        // exists
        const math = {
            // exist
            add : (a, b) => { a + b}
        }

        // exist, Unit test
        const calc = {
            sum : () => {
              const result =   math.add(10, 20)
              // use result
            }
        }

        // how do i know whetehr math.add called or something else called / spy
        // how do i know whether 10, 20 passoed or soemthng else / spy

        // spy one function
        sinon.spy(math, "add");
 
        calc.sum();

        expect(math.add.calledOnce).to.eq(true);
        // getCall(0) the first call stack, getCall(1), second call argument
        expect(10).to.eq(math.add.getCall(0).args[0] ); //.args[0] is a which is 10
        expect(20).to.eq(math.add.getCall(0).args[1] ); //.args[1] is b which is 20

      //  assert(20, math.add.getCall(0).args[1] ); //.args[1] is a which is 20
     })


})