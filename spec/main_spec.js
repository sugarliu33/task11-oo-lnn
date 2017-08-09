"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var bottleSong = require("../lib/main.js");


describe("buildBottlesSong", function(){
    sinon.spy(console, 'log');

    it("return empty String given empty String", function(){

        var result = bottleSong.buildBottleSong();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    it("return one bottle String given one bottle", function(){

        var result = bottleSong.buildBottleSong(1);
        var expect_string = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.';

        expect(expect_string).to.equal(result);
    });

    xit("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
});