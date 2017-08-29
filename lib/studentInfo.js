const query = require('cli-interact').getNumber ;
const studentIn = require('cli-interact').question;


class studentInfo{
    constructor(stuName, stuNo, clazzNo){
        this.stuName = stuName;
        this.stuNo = stuNo;
        this.clazzNo = clazzNo;
    }

    addCourseGrade(courseName, grade){
        this.courseMap = {};
        this.courseMap[courseName] = grade;
    }
    calculateSumAver(student){
        this.sum = 0;
        let count = 0;
        for (let i of student.courseMap) {
            this.sum += student.courseMap[i];
            count++;
        }
        this.aver = this.sum / count;
        console.log(this.sum);
    }

}
module.exports = studentInfo;
