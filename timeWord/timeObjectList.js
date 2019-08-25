


// Word dictionary object for time conversion
// better be const cuz I dont change

let zeroToNineTeenDictionary = {

"0": "oh",
"00" : "o’clock",
"1": "one",
"2": "two",
"3": "three",
"4": "four",
"5": "five",
"6": "six",
"7": "seven",
"8": "eight",
"9": "nine",
"10" : "ten",
"11": "eleven",
"12": "twelve",
"13": "thirteen",
"14" : "fourteen",
"15" :"fifteen",
"16": "sixteen",
"17": "seventeen",
"18": "eighteen",
"19": "nineteen",
};

let twentyToFifty = {
    "2": "twenty",
    "3": "thirty",
    "4": "fourty",
    "5": "fifty"
};

let specialCase = {
    "00:00" : "midnight",
    "12:00" : "noon"
};



module.exports = {
    zeroToNineTeenDictionary,
    twentyToFifty,
    specialCase
}

