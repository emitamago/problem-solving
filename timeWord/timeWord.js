
/******* ******WORD DICTIONARY FOR TIME CONVERSION FORM SEPARATE FILE**********/
const { zeroToNineTeenDictionary } = require('./timeObjectList');
const { twentyToFifty } = require('./timeObjectList')
const { specialCase } = require('./timeObjectList')


/**Take time as string like "11:14" return words like "eleven fourteen am" */
function timeWord(time) {

    // take care of two unique cases "midnight" and "noo"
    if (time === "12:00" || time === "00:00") {
        return specialCase[time]
    }

    /**Prepare some variable that are needed for conversion* */ 
    
    // separating hour and minutes
    let hourAndMin = time.split(":")

    // let [hourStr, minStr] = time.split(":")
    
    // variable for conversion for hour
    let tempHourNum = Number(hourAndMin[0]);

    // variable for conversion for minutes
    let tempMinNum = Number(hourAndMin[1]);
    let tempminTensPlace = hourAndMin[1][0]
    let tempminOnesPlace = hourAndMin[1][1]

    
    // am or pm
    let last = amOrPm(tempHourNum)

    // hour
    let hour = convertHour(tempHourNum)

    // minutes
    let min = convertMin(tempMinNum, tempminTensPlace, tempminOnesPlace)

    // putting all together
    let humanWords= `${hour} ${min} ${last}`
    
    return humanWords

}

/*****************************HELPER FUNCTION************************************** */
// take number converted hour and assign am or pm accordingly
// ternally is better
function amOrPm(number) {
    let last
    if (number < 12) {
        last = "am"
    } else {
        last = "pm"
    }
    return last
}

// conversion of hour. Take number converted hour and return words converted hour
function convertHour(number) {
    // variable to store output
    let convertedHour;

    // if hour is more 12, turn into 12th base time and look up word
    if (number > 12) {
        let lookupHour = number - 12
        convertedHour = zeroToNineTeenDictionary[lookupHour]

    // if hour is 00, turn into 12 and look up word
    } else if (number === 0) {
        convertedHour = zeroToNineTeenDictionary[12]
    
    // look up word 
    } else {
        convertedHour = zeroToNineTeenDictionary[number]
    }
    return convertedHour

}

// coversion of min. take number converted min. 
// As well as ones place of min and tens place of min to handle special case
function convertMin(number, tensPlacestr, onesPlacestr) {
    //  setting variable for conversion
    let convertedmin;
    let minTensPlace;
    let minOnesPlace;

    // when min is 00, 'o'clock
    if (number === 0) {
        convertedmin = zeroToNineTeenDictionary["00"]

     //when min is between 10 to 20, look up the number itself 
    } else if (number > 9 && number < 20) {
        convertedmin = zeroToNineTeenDictionary[number]
    
    // when min is either less than 10 or greater than 20, 
    // ones place and tens place are handled separately
    } else {
        // branch out if min is greater than 20 or less than 10. 
        // tens place will be looked up from different word dictionaries accordingly
        // ones place will be looked up form same word dictionary
        if (number > 19) {
            minTensPlace = twentyToFifty[tensPlacestr]
        } else {
            minTensPlace = zeroToNineTeenDictionary[0]
        }
        minOnesPlace = zeroToNineTeenDictionary[onesPlacestr]
        convertedmin = `${minTensPlace} ${minOnesPlace}`
    }
    return convertedmin
}








module.exports = timeWord