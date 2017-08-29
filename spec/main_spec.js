"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var main = require("../lib/main.js");
var studentInfo = require("./studentInfo");
var classInfo = require("./classInfo");

function init() {
    return query(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
}

describe("classInfo", function(){
    //sinon.spy(console, 'log');
    it ("should return '学生的信息已添加", function () {
        let stuIn = studentIn(`请输入学生信息（格式: 姓名,学号,班级,学科:成绩, ...），按回车提交：`);
        // var str = "张三,001,2,数学:98,语文:99,英语:88,编程:90"
        var classIn = new classInfo;
        var ans = classIn.addStudent(stuIn);
        var expectStr = '学生张三的成绩被添加';
        expect(ans).to.equal(expectStr);
    });
});