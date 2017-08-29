const query = require('cli-interact').getChar ;
const strQuery = require('cli-interact').question;

let studentsList = [];

function initialize() {
    return query(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
}

function verifyIputs(str) {
    // language=JSRegexp
    const reg = /[\u4e00-\u9fa5]+,[0-9]\d*,[1-9]\d{0}(,[\u4e00-\u9fa5]+:[0-9]\d?){1,4}/;
    return reg.test(str);
}

function add() {
    let str = strQuery(`请输入学生信息（格式: 姓名,学号,班级,学科:成绩, ...），按回车提交：`);
    while (!verifyIputs(str)) {
        str = strQuery(`请按正确的格式输入（格式: 姓名,学号,班级,学科:成绩, ...）：`);
    }
    let arr = str.split(',');
    let obj = {
        name: arr[0],
        id: arr[1],
        clazz: arr[2],
        score: {}
    };
    for (let i in arr) {
        if (i > 2) {
            obj.score[arr[i].split(':')[0]] = Number(arr[i].split(':')[1]);
        }
    }
    ;
    studentsList.push(obj);
    console.log(`学生${obj.name}的成绩被添加`);
    // stuAverTotal();
    // console.log(studentsList);
    main();
}

function verifyId(str) {
    const reg1 = /([0-9]\d*,)*[0-9]\d*$/;
    const reg2 = /[0-9]\d*/;
    return reg1.test(str) || reg2.test(str);
}

function stuAverTotal() {
    for (let item of studentsList) {
        let sum = 0;
        let n = 0;
        for (let i in item.score) {
            sum = sum + item.score[i];
            n++;
        }
        item['aver'] = sum / n;
        item['total'] = sum;
    }
}

function clazzAver() {
    let sum = 0;
    for (let item of studentsList) {
        sum += item.total;
    }
    return sum / studentsList.length;
}

function clazzMedian() {
    let total = [];
    let res = 0;
    for (let item of studentsList) {
        total.push(item.total);
    }
    total.sort((a, b) => a - b);
    if (total.length % 2 === 0) {
        res = (total[total.length / 2] + total[total.length / 2 - 1]) / 2;
    } else {
        res = total[Math.floor(total.length / 2)];
    }
    return res;
}


function reportPrint(ave, median, id) {
    let str = (`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================\n`);
    for (let item of studentsList) {
        if (id.indexOf(item.id) !== -1) {
            str += `${item.name}|${item.score['数学']}|${item.score['语文']}|${item.score['英语']}|${item.score['编程']}|${item.aver}|${item.total}\n`;
        }
    }
    str += `========================
全班总分平均数：${ave}
全班总分中位数：${median}`;
    console.log(str);
}

function generateReport() {
    let stuId = strQuery(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
    while (!verifyId(stuId)) {
        stuId = strQuery(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
    }
    stuAverTotal();
    let Aver = clazzAver();
    let Median = clazzMedian();
    reportPrint(Aver, Median, stuId);
    main();
}

function main() {
    let option = initialize();
    if (option === 1) {
        add();
    } else if (option === 2) {
        generateReport();
    } else if (option === 3) {
        return 0;
    } else {
        console.log(`请输入正确的选项！`);
        main();
    }
}

main();
module.exports = main;