
function buildBarcode() {
    var barcodeList = [
        { num : '0', barcode: "||:::"},
        { num : '1', barcode: ":::||"},
        { num : '2', barcode: "::|:|"},
        { num : '3', barcode: "::||:"},
        { num : '4', barcode: ":|::|"},
        { num : '5', barcode: ":|:|:"},
        { num : '6', barcode: ":||::"},
        { num : '7', barcode: "|:::|"},
        { num : '8', barcode: "|::|:"},
        { num : '9', barcode: "|:|::"}
    ];
    return barcodeList;
}

function main(postItem) {
    var barcodeList = buildBarcode();
    if (postItem.indexOf(':') > 0){
        var postNum = barcodeToNum(postItem,barcodeList);
        return postNum
    }else {
        var includeCheckcode = calculateCheckcode(postItem);
        var barcodeStr = numToBarcode(includeCheckcode,barcodeList);
        return barcodeStr;
    }
}

function calculateCheckcode(post) {
    var sum = 0;
    var str = '';
    for (let item of post) {
        if (item != '-'){
            str += item;
            sum +=parseInt(item);
        }
    }
    str += (10 - sum % 10).toString();
    return str;
}
function numToBarcode(includeCheckcode,barcodeList) {
    var outBarcodeStr = '|';
    for (let item of includeCheckcode) {
        for (let obj of barcodeList) {
            if (item === obj.num ){
                outBarcodeStr += obj.barcode;
            }
        }
    }
    return outBarcodeStr + '|';
}
function barcodeToNum(postItem, barcodeList) {
    var postNum = '';
    var tempArr = [];
    var barcode = postItem.slice(1,postItem.length - 1);
    let temp = '';
    for (let item of barcode) {
        temp += item;
        if (temp.length == 5){
            tempArr.push(temp);
            temp = '';
        }
    }
    for (let item of tempArr) {
        for (let obj of barcodeList) {
            if (item === obj.barcode){
                postNum += obj.num;
            }
        }
    }
    postNum = postNum.slice(0,postNum.length - 1);
    if (postNum.length > 5){
        let str = postNum.slice(0,5);
        str += '-' + postNum.slice(5);
        return str;
    }else {
        return postNum;
    }

}
module.exports = {
    main: main,
    calculateCheckcode: calculateCheckcode,
}