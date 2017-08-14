function main(postNum) {
    var includeCheckcode = CalculateCheckcode(postNum);
    return includeCheckcode;
}

function CalculateCheckcode(post) {
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

module.exports = {
    main:main
}