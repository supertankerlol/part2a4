    function reverseString(str) {
    let reversed = '';
    for (let i = str.length-1; i >= 0;i--) {
        reversed += str[i];
    }
    return reversed;
    }
    const Str = "Hello World";
    const revStr = reverseString(Str);
    console.log(revStr);