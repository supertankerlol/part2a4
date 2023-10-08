//polindrome
    function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original string with its reverse
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
    }
    const testString = "A man, a plan, a canal, Panama";
    const isPalin = isPalindrome(testString);
    console.log(`"${testString}" is a palindrome: ${isPalin}`);