function order(words) {
    const arrayOfWords = words.split(" ");
    arrayOfWords.forEach((element, index) => {
        for (let i = 1; i < 10; i++) {
            if (element.includes(i)) {
                element = i + element;
                return arrayOfWords[index] = element;
            }
        }
    });
    arrayOfWords.sort();
    arrayOfWords.forEach((element, index) => {
        element = element.slice(1);
        arrayOfWords[index] = element;
    })
    const output = arrayOfWords.reduce((x, y) => {
        return x + " " + y;
    });
    return output;
}
const word = "4of Fo1r pe6ople g9ag g3ood th5e the2"
console.log(order(word))