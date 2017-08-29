const query = require('cli-interact').getNumber ;
const studentIn = require('cli-interact').question;

var studentInfo = require("./studentInfo");
let studentsList = [];
function init() {
    return query(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
}

function checkoutStuInStr(str){
    const reg = /[\u4e00-\u9fa5]+,[0-9]\d*,[1-9]\d{0}(,[\u4e00-\u9fa5]+:[0-9]\d?){1,4}/;
    return reg.test(str);
}
function checkoutStuId(str){
    const reg1 = /([0-9]\d*,)*[0-9]\d*$/;
    const reg2 = /[0-9]\d*/;
    return reg1.test(str) || reg2.test(str);
}


function addStudent(str){
    while (!checkoutStuInStr(str)) {
        str = studentIn(`请按正确的格式输入（格式: 姓名,学号,班级,学科:成绩, ...）：`);
    }
    let arr = str.split(',');
    let stuInfo = new studentInfo(arr[0],arr[1],arr[2]);
    for (let i in arr) {
        if (i > 2) {
            stuInfo.addCourseGrade(arr[i].split(':')[0],arr[i].split(':')[1]);
        }
    }
    studentsList.push(stuInfo);
    console.log(`学生${stuInfo.stuName}的成绩被添加`);
    main();
}
function calAllSum() {
    let sum = 0;
    for (let student of studentsList) {
        sum += student.calculateSumAver();
    }
    return sum;

}

function buildReport(str) {
    while (!checkoutStuId(str)) {
        str = studentIn(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
    }
    let arr = str.split(',');

    let total = calAllSum();
    console.log(total);
    main();
}
function main(){
    while (true) {
        let choice = init();
        if (choice === 1){
            let stuIn = studentIn(`请输入学生信息（格式: 姓名,学号,班级,学科:成绩, ...），按回车提交：`);
            addStudent(stuIn);
        }else if (choice === 2){
            let stuIdStr = studentIn('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
            buildReport(stuIdStr);
        }else if (choice === 3) {
            return 0;
        }else {
            console.log("请输入正确的选项");
        }
    }


}

main();