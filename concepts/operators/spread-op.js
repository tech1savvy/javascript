// goes by its name

// can spread arrays
const intergerArray = [1, 2, 3];
const objectArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

console.log("integerArray:      ", intergerArray);
console.log("...intergerArray:  ", ...intergerArray);
console.log("objectArray:       ", objectArray);
console.log("...objectArray:    ", ...objectArray);

const combinedArray = [...intergerArray, ...objectArray];
console.log("combinedArray:     ",combinedArray);
