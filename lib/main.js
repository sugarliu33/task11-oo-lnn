
function buildBottleSong(num) {
    let ans = '';
    for (var i = num; i >= 1; i--){
        let ibottleStr = "bottle";
        let jbottleStr = "bottle";
        j = i - 1 ;
        if (i > 1) {
            ibottleStr = "bottles";
        }
        if (j > 1) {
            jbottleStr = "bottles";
        }
        if(j >= 1){
            ans += i +" " + ibottleStr + " of beer on the wall, "+ i +" " + ibottleStr + " of beer." + "\n"+
                "Take one down and pass it around, "+ j +' '+ jbottleStr + " of beer on the wall." +'\n';
        }else if (j === 0){
            ans += i +" " + ibottleStr + " of beer on the wall, "+ i +" " + ibottleStr + " of beer." + "\n"+
                "Take one down and pass it around, no more bottles of beer on the wall." +'\n';
        }
    }
    ans += "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.";
    return ans;
}

function main(num){
    var result = buildBottleSong(num);
    return result;
    console.log(result);
}
main(10);
module.exports = { main : main,
        buildBottleSong : buildBottleSong
        }
