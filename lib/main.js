function main(postNum) {
    var includeCheckcode = CalculateCheckcode(postNum);
    return includeCheckcode;
}

function CalculateCheckcode(postNum) {
    var post = postNum;
    var sum = 0;
    if (post.indexOf('-') > 0){

    }else {
        for (let item of postNum) {
            sum += parseInt(item);
        }
    }
    post += (sum % 10).toString();
    return post;
}

module.exports = {
    main:main
}