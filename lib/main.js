function main(){
    
    
}
function buildBottleSong(num) {
    if (num === 1){
        return num + " bottle of beer on the wall, "+ num + " bottle of beer." + "\n"+
            "Take one down and pass it around, no more bottles of beer on the wall."
    }
    return '';
}
module.exports = { main : main,
        buildBottleSong : buildBottleSong

        }
