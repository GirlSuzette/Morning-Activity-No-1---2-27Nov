// Check if a string (first argument) ends with the given 
//target string (second argument).

// function confirmEnding(string, target) {
//     if (string[string.length - 1] === target) {
//         return true;
//     } else {
//         return false
//     }
// }


function confirmEnding(string, target) {
    if (string.substr(-1) === target) {
        return true
    } else {
        return false
    }
}



console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Hold on", "o")); // false