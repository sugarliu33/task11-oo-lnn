"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var main = require("../lib/main");

describe("calculateCheckcode", function(){
    sinon.spy(console, 'log');
    it ("should return checkCode given postNumber", function () {
        var arr = [9,5,7,1,3];
        var result = main(arr);
        var expectString = [9,5,7,1,3,5];
        expect(result).to.Equal(expectString);
    });

    xit("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
});