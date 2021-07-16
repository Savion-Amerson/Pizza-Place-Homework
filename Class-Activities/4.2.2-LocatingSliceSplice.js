const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(arr.indexOf("a"));

// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOf("a"));

// if the first index and last index of "a" is not the same, remove the last instance // repeat until there is just one "a"
function removeDups(array, letter) {
    let firstIndex = array.indexOf("a");
    let lastIndex = array.lastIndexOf("a");
    while (firstIndex !== lastIndex) {
        array.splice(lastIndex, 1);
        lastIndex = array.lastIndex(letter);
    }
    return array
};

console.log(removeDups(arr, "a"));