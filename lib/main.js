function main(postNum) {
    var barcodeList = buildBarcode();
    var includeCheckcode = calculateCheckcode(postNum);
    var barcodeStr = numToBarcode(includeCheckcode,barcodeList);
    return barcodeStr;
}

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
    console.log(includeCheckcode);
    for (let item of includeCheckcode) {
        for (let obj of barcodeList) {
            if (item === obj.num ){
                outBarcodeStr += obj.barcode;
            }
        }
    }
    return outBarcodeStr + '|';
}

module.exports = {
    main:main,
    calculateCheckcode : calculateCheckcode
}