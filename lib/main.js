function main(){
    
    
}
function buildBottleSong(num) {
    let ans = '';
    for (var i = num; i >= 1; i--){
        let bottleStr = "bottle";
        if (i >1){
            bottleStr = "bottles";
            ans += i +" " + bottleStr + " of beer on the wall, "+ i +" " + bottleStr + " of beer." + "\n"+
                "Take one down and pass it around, "+ (i-1) + " bottle of beer on the wall." +'\n';
        }else {
            ans += i +" " + bottleStr + " of beer on the wall, "+ i +" " + bottleStr + " of beer." + "\n"+
                "Take one down and pass it around, no more bottles of beer on the wall." +'\n';
        }
    }
    return ans;
}
console.log(buildBottleSong(2));
module.exports = { main : main,
        buildBottleSong : buildBottleSong
        }
