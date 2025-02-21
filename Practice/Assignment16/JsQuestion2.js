// from question 12 to 16

//Question-12 
// var neighbours = ["Pakistan", "China", "Nepal", "Bangladesh"];
// console.log("Original neighbours:", neighbours);
// neighbours.push("Utopia");
// console.log("After adding Utopia:", neighbours);
// neighbours.pop();
// console.log("After removing Utopia:", neighbours);
// if (!neighbours.includes("Germany")) {
//     console.log("Probably not a central European country :D");
// }
// var index = neighbours.indexOf("Nepal"); 
// if (index !== -1) {
//     neighbours[index] = "Federal Democratic Republic of Nepal"; 
// }

// console.log("After renaming Nepal:", neighbours);

//Question-13

// var myCountry = {
//     country: "India",
//     capital: "New Delhi",
//     language: "Hindi",
//     population: 1428,
//     neighbours: ["Pakistan", "China", "Nepal", "Bangladesh"]
// };

// console.log(
//     `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 2;
// console.log("Population after increase:", myCountry.population);

// myCountry["population"] -= 2;
// console.log("Population after decrease:", myCountry.population);

// myCountry.describe = function () {
//     console.log(
//         `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
// };

// myCountry.describe();

// myCountry.checkIsland = function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
// };

// myCountry.checkIsland();

// console.log("Is my country an island?", myCountry.isIsland);

//Question-14

// for (var i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// function percentageOfWorld1(population) {
//     return (population / 7900000000) * 100;
// }

// var population = [1428627663, 68200000, 241495112, 36408818];
// var percentages2 = [];

// for (var i = 0; i < population.length; i++) {
//     percentages2.push(percentageOfWorld1(population[i]));
// }

// var listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

// for (var i = 0; i < listOfNeighbours.length; i++) {
//     for (var j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

//Question-15
// function calculateAge(dob) {
//     var birthDate = new Date(dob);
//     var today = new Date();
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     console.log(`Current age: ${age}`);
// }

// function getDayOfWeek(dateString) {
//     var date = new Date(dateString);
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     console.log(`Day of the week: ${days[date.getDay()]}`);
// }

// function getDaysInMonth(month, year) {
//     console.log(`Days in month: ${new Date(year, month, 0).getDate()}`);
// }

// function getStartAndEndOfMonth() {
//     var today = new Date();
//     var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
//     var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
//     console.log(`First day: ${firstDay.toDateString()}`);
//     console.log(`Last day: ${lastDay.toDateString()}`);
// }

// function formatDate(dateString) {
//     var date = new Date(dateString);
//     var mm = String(date.getMonth() + 1).padStart(2, '0');
//     var dd = String(date.getDate()).padStart(2, '0');
//     var yyyy = date.getFullYear();
//     console.log(`MM/DD/YYYY: ${mm}/${dd}/${yyyy}`);
//     console.log(`YYYY-MM-DD: ${yyyy}-${mm}-${dd}`);
//     console.log(`DD-MM-YYYY: ${dd}-${mm}-${yyyy}`);
// }

// calculateAge("2000-05-15");
// getDayOfWeek("2025-02-10");
// getDaysInMonth(2, 2024);
// getStartAndEndOfMonth();
// formatDate("2025-02-10");

//Question-16
function cleanPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/[\(\)\-\s]/g, '');
}

function sortStringCharacters(str) {
    return str.split('').sort().join('');
}

function sortProductNames(products) {
    return products.sort();
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

function splitWords(str) {
    return str.match(/[a-zA-Z]+/g) || [];
}

function toCamelCase(str) {
    let words = str.toLowerCase().split(/[^a-zA-Z0-9]+/);
    return words.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function containsAllWords(str, words) {
    return words.every(word => str.includes(word));
}

function lexicographicallySmallestConcat(strings) {
    return strings.sort((a, b) => a + b < b + a ? -1 : 1).join('');
}

function findAllOccurrences(mainStr, subStr) {
    let positions = [];
    let index = mainStr.indexOf(subStr);
    while (index !== -1) {
        positions.push(index);
        index = mainStr.indexOf(subStr, index + 1);
    }
    return positions;
}

function replaceWholeWord(str, target, replacement) {
    return str.replace(new RegExp(`\\b${target}\\b`, 'g'), replacement);
}

function normalizeSpaces(str) {
    return str.trim().replace(/\s+/g, ' ');
}

console.log(cleanPhoneNumber("(123) 456-7890"));
console.log(sortStringCharacters("ecommerce"));
console.log(sortProductNames(["Laptop", "Phone", "Tablet", "Camera"]));
console.log(isPalindrome("Madam, in Eden, I'm Adam"));
console.log(splitWords("hello-world, welcome! to coding."));
console.log(toCamelCase("hello world this is test"));
console.log(containsAllWords("The quick brown fox jumps over the lazy dog", ["quick", "fox", "dog"]));
console.log(lexicographicallySmallestConcat(["cat", "bat", "apple"]));
console.log(findAllOccurrences("hello hello world hello", "hello"));
console.log(replaceWholeWord("the cat is on the mat", "cat", "dog"));
console.log(normalizeSpaces("  This   is   a   test  "));
