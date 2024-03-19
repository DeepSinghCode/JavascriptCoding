function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = 'Hello, world!';
const reversedString = reverseString(originalString);

document.write("Given string is: ", originalString);

document.write("Revese string is: ", reversedString);

