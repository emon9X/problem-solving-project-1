/**
 * Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input 
string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 */

//solve 1
function duplicateCount(text) {
    const textToLower = text.toLowerCase();
    let array = [];
    for (let i = 0; i <=textToLower.length - 2; i++) { /*why textToLower.length-2 */
        for (let j = i+1; j <= textToLower.length-1; j++) {
            if(textToLower[i] == textToLower[j]){
                if(!array.includes(textToLower[i])) {
                    array.push(textToLower[i]);
                }
            }
        }
    }
    console.log(array);
    return array.length
}
const count = duplicateCount("Saiffulllahhhhhlaaaassss2k");
console.log(count)

//solve 2
function duplicateCount2(text) {
    const textToLower = text.toLowerCase();
    let array = [];
    let array2 = [];
    for (let i = 0; i <=textToLower.length - 1; i++) { 
        if (!array.includes(textToLower[i])) {
            array.push(textToLower[i]);
        }
        else if (!array2.includes(textToLower[i])) {
            array2.push(textToLower[i])
        }
    }
    console.log(array);
    console.log(array2)
    return array2.length
}
const count2 = duplicateCount("Saiffulllahhhhhlaaaassss2k");
console.log(count2)

//
function duplicateCount3(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
    }
    const count3 = duplicateCount3("Saiffulllahhhhhlaaaassss2k")
    console.log(count3)