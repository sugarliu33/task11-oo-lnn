const query = require('cli-interact').getNumber ;
const studentIn = require('cli-interact').question;

var studentInfo = require("./studentInfo");
var classInfo = require("./classInfo");


function init() {
    return query(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
}

function main(){
    let choice = init();
    let classAdd = new classInfo;
    if (choice === 1){
        let stuIn = studentIn(`请输入学生信息（格式: 姓名,学号,班级,学科:成绩, ...），按回车提交：`);
        classAdd.addStudent(stuIn);
    }else if (choice === 2){
        let stuIdStr = studentIn('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        classAdd.buildReport(stuIdStr);
    }else if (choice === 3) {
        return 0;
    }else {
        console.log("请输入正确的选项");
        main();
    }

}
main();
module.exports = main();