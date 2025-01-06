//A pyramid generator is a program where you can set the type of character, 
//the count for the pyramid, and the direction of the pyramid. 
//The program will then generate a pyramid based on those inputs.

// step 1-12
const character = "#";
//console.log(character);
//character = "World";
//console.log(character);
//let secondCharacter;
//secondCharacter = character;
//console.log(secondCharacter);

// step 13
//let profession = "teacher";
//let age;
//console.log(profession);
//console.log(age);

//step 14
const count = 8;
//console.log(count + 1);
// step 19 array
const rows = [];
//console.log(rows[0]);
//rows[rows.length - 1] = 10;
//method push
//rows.push("freeCodeCamp");
// step 28
//let pushed = rows.push();
//console.log(pushed);
//console.log(rows);
//step 27 method pop() - t removes the last element from an array and returns that element.
//let popped = rows.pop();
//console.log(popped);
//let cities = ["London", "New York", "Mumbai"];
//console.log(cities);
//cities[cities.length - 1] = "Mexico City";
//console.log(cities);
//step 47 add function
function padRow(rowNumber, rowCount) {
    //const test = "Testing!";
    //console.log("This works!");
    //return test;
    //console.log("This works");
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//const call = padRow();
//console.log(call);
//step 33 loop for
//TODO use a different type of loop
/*for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
    //console.log(i);
}*/
/* test of else if
if ("") {
    console.log("Condition is true");
} else if (5 > 10) {
    console.log("5 is less than 10");
} else {
    console.log("This is the else block");
}
*/
let continueLoop = false;
let done = 0;
while (continueLoop) {
    
}
let result = "";


for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);