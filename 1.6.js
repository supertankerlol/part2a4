//duplicates
function finddupclicates(array){
    let count = 0;
    for(let i=0;i<array.length;i++){
        for(let j = i+1; j<array.length;j++){
            if(array[i] == array[j]){
                return true;
            }
        }
    }
    return false;
}
const res = finddupclicates(array);
console.log(res);

//longest word
function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > longestWord.length) {
        longestWord = word;
        }
    }
    return longestWord;
    }

    const sentence = "the longest word in this sentence";
    const longestWord = findLongestWord(sentence);
    console.log(`The longest word in the sentence is: `+longestWord);

    let array = [2,3,10,4,1,5,6,2,4,5,6,2];
    function max(array){
        let max = array[0];
        for(let i=1;i<array.length;i++){
            if(array[i] > max)
            max = array[i];
        }
        return max;
    }
    console.log(max(array));