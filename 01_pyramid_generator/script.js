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
function padRow(name) {
    return name;
}
const call = padRow("Ivan");
console.log(call);
//step 33 loop for
for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
    //console.log(i);
}

let result = "";


for (const row of rows) {
    result = result + row + "\n";
}

console.log(result);