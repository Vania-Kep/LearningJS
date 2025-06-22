// Lesson 17: Modules
export function isPalindrome(str: string): boolean {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanedStr === cleanedStr.split('').reverse().join('');
}



console.log(isPalindrome("madam")); // true
console.log(isPalindrome("madan")); // false