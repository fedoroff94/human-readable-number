module.exports = function toReadable(number) {
    let arrFromZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    // let thousand = 'thousand';

    let numberToStr = number.toString();

    if (!number || number === 0) {
        return arrFromZeroToNineteen[0]
    } else if (numberToStr.length === 3 && 100 <= number <= 999) {
        if (numberToStr[1] === '0' && numberToStr[2] === '0') {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred';
            // console.log(word)
            return word
        } else if (numberToStr[1] !== '0' && numberToStr[2] === '0' && +(numberToStr[1] + numberToStr[2]) >= 20) {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred' + ' ' + arrTens[numberToStr[1] - 2];
            // console.log(word)
            return word
            // PROBLEM
        } else if (numberToStr[1] !== '0' && numberToStr[2] === '0' && +(numberToStr[1] + numberToStr[2]) <= 19) {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred' + ' ' + arrFromZeroToNineteen[+(numberToStr[1] + numberToStr[2])];
            // console.log(word)
            return word;
        } else if (numberToStr[1] === '0' && numberToStr[2] !== '0') {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred' + ' ' + arrFromZeroToNineteen[numberToStr[2]];
            // console.log(word)
            return word
        } else if (numberToStr[1] !== '0' && numberToStr[2] !== '0' && +(numberToStr[1] + numberToStr[2]) >= 20) {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred' + ' ' + arrTens[numberToStr[1] - 2] + ' ' +
                arrFromZeroToNineteen[numberToStr[2]];
            // console.log(word);
            return word
        } else if (numberToStr[1] !== '0' && numberToStr[2] !== '0' && +(numberToStr[1] + numberToStr[2]) <= 19) {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred' + ' ' + arrFromZeroToNineteen[+(numberToStr[1] + numberToStr[2])];
            // console.log(word)
            return word
        } else if (numberToStr[1] !== '0' && numberToStr[2] === '0' && +(numberToStr[1] + numberToStr[2]) === 10) {
            let word = arrFromZeroToNineteen[numberToStr[0]] + ' ' + 'hundred' + ' ' + arrFromZeroToNineteen[10];
            // console.log(word)
            return word
        }
    } else if (1 <= numberToStr.length <= 2 && number < 20) {
        let word = arrFromZeroToNineteen[number];
        return word;
        // console.log(word);
    } else if (1 <= numberToStr.length <= 2 && 20 <= number <= 99) {
        if (numberToStr[1] === '0') {
            let word = arrTens[numberToStr[0] - 2];
            return word;
            // console.log(word)
        } else if (numberToStr[1] != '0') {
            let word = arrTens[numberToStr[0] - 2] + ' ' + arrFromZeroToNineteen[numberToStr[1]];
            return word;
            // console.log(word)
        }
    }
}
;

// toReadable(910);
