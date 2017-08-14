"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var main = require("../lib/main.js");

describe("calculateCheckcode", function(){
    //sinon.spy(console, 'log');
    it ("should return checkCode given postNumber without '-'", function () {
        var arr = '95713';
        var result = main.main(arr);
        var expectStr = '957135';
        expect(result).to.equal(expectStr);
    });
    it ("should return checkCode given postNumber with '-'", function () {
        var arr = [5,5,5,5,5,'-',1,2,3,7];
        var result = main.main(arr);
        var expectStr = [ 5,5,5,5,5,1,2,3,7,2 ];
        expect(result).to.equal(expectStr);
    });

    xit("测试用例2", function(){

        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';
        expect(expect_string).to.equal(result);
    });
});