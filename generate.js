const NUMS = '0123456789';
const LOWERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SYMBOLS = ',.!@#$%^&*';

const generate = (symbol, upper, lower, num, len) => {
    
    //stitch together some characters to use
    let charsToUse = ""
    
    if (symbol){
        charsToUse = charsToUse + SYMBOLS;
    }
    if (num){
        charsToUse = charsToUse + NUMS;
    }
    if (lower) {
        charsToUse = charsToUse + LOWERS;
    }
    if (upper) {
        charsToUse = charsToUse + UPPERS;
    }

    let genPass = ""

    for ( let i = 0; i < len; i++ ) {
        const ranIdx = Math.floor(Math.random() * charsToUse.length)
        genPass = genPass + charsToUse[ ranIdx]
        console.log('ranIdx: ',ranIdx)
    }
    console.log('genPass: ', genPass);
    console.log('chars: ', charsToUse);
    return genPass;
};

module.exports = generate