const query = require('cli-interact').getNumber ;
const studentIn = require('cli-interact').question;

var studentInfo = require('./studentInfo');
var main = require('./main.js');
class classInfo {
    constructor(){
        this.number = 0;
        this.studentsList = [];
    }
    checkoutStuInStr(str){
        const reg = /[\u4e00-\u9fa5]+,[0-9]\d*,[1-9]\d{0}(,[\u4e00-\u9fa5]+:[0-9]\d?){1,4}/;
        return reg.test(str);
    }
    checkoutStuId(str){
        const reg1 = /([0-9]\d*,)*[0-9]\d*$/;
        const reg2 = /[0-9]\d*/;
        return reg1.test(str) || reg2.test(str);
    }
    addStudent(str){
        while (!this.checkoutStuInStr(str)) {
            str = studentIn(`请按正确的格式输入（格式: 姓名,学号,班级,学科:成绩, ...）：`);
        }
        let arr = str.split(',');
        let stuInfo = new studentInfo(arr[0],arr[1],arr[2]);
        for (let i in arr) {
            if (i > 2) {
                stuInfo.addCourseGrade(arr[i].split(':')[0],arr[i].split(':')[1]);
            }
        }
        this.studentsList.push(stuInfo);
        this.number++;
        console.log(`学生${stuInfo.stuName}的成绩被添加`);
        console.log(stuInfo);
        main;
    }
    buildReport(str){
        while (!this.checkoutStuId(str)) {
            str = studentIn(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
        }
        let arr = str.split(',');
        let total = this.calAllSum(this.studentsList);

        console.log(total);
    }
    calAllSum(studentList){
        return studentList.reduce((total,student) => {
            return total += student.sum;
        });

    }
}
module.exports = classInfo;



