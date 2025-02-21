// Question-1
// var country="India";
// var continent="Asia";
// var population="1,425,775,850";
// console.log("country : "+country+"\ncontinent : "+continent+"\npopulation : "+population);

// Question-2
// var isIsland=false;
// var language;
// var country="India";
// var population=1425775850;
// console.log("output");
// console.log("isIsland : "+isIsland+"\ncountry : "+country+"\nLanguage : "+language+"\npopulation : "+population);
// console.log("typeof of variables");
// console.log("isIsland : "+typeof(isIsland)+"\ncountry : "+typeof(country)+"\nLanguage : "+typeof(language)+"\npopulation : "+typeof(population));

//  Question-3
// var language="Malayalam";
// const continent="Asia";
// continent="Europe";
// const country="India";
// country="Saudi Arabia";
// var population=1425775850;
// console.log("Language: "+language+"\ncountry : "+country+"\ncontinent : "+continent+"\npopulation : "+population);

// Question-4
// var population=1425775850;
// var halfPopulation=population/2;
// console.log(halfPopulation);

// console.log(population+1);

// var population=1425775850;
// var finlandPopulation=6000000;
// console.log("Does your country have more people than Finland? "+(Number(population)>Number(finlandPopulation)));

// var population=1425775850;
// var AvgOfCountry=33000000;
// console.log("Does your country have less people than the average country ? "+(population<AvgOfCountry));

// var description="Portugal is in Europe and its 11 million people speaks portuguese";
// console.log(description);

// var description2=`Portugal is in Europe and its 11 million people speaks portuguese`;
// console.log(description2);

//Question-5
// console.log('9'-'5');
// console.log('19'-'13'+'17');
// console.log('19'-'13'+17);
// console.log('123'<57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

//Question-6
// var numNeighbours = prompt("How many neighbours does your country have?");
// numNeighbours = Number(numNeighbours); // Convert the input to a number

// if (numNeighbours === 1) {
//     console.log("Exactly one neighbour!");
// } else if (numNeighbours > 1) {
//     console.log("More than one neighbour!");
// } else {
//     console.log("No neighbours!");
// }

//Question-7
// var country="India";
// var language="Hindi";
// var population=45;
// isIsland=false;
// if(language==='English'&&population<50&& !isIsland){
//     console.log(`You should live in ${country} :)`);
// }else{
//     console.log(`${country} doesn't meet your criteria :(`);
// }

// console.log("When the conditions match");
// country="United Kingdom";
// language="English";
// population=45;
// isIsland=false;
// if(language==='English'&&population<50&&!isIsland){
//     console.log(`You should live in ${country} :)`);
// }

//Question-8
// var language=prompt("enter the language").toLowerCase();
// switch(language){
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
//         break;
// }

//Question-9
// var population=1425775850;
// console.log(population>33000000?`Portugal's population is above average`:`Portugal's population is below average`);

//Question-10
// function describeCountry(country,population,capitalCity){
//     var info=`${country} has ${population} million people and its capital is ${capitalCity}`;
//     return info;
// }
// // console.log(describeCountry("Finland",6000000,"Helsinki"));
// console.log(describeCountry("India",1425775850,"New Delhi"));
// console.log(describeCountry("Portugal",11000000,"Lisbon"));
// console.log(describeCountry("Saudi Arabia",33000000,"Riyadh"));

// var worldPopulation=7900000000;
// function percentOfWorld1(chinaPopulation){
// return (chinaPopulation/worldPopulation)*100;
// }
// var chinaPopulation=1441000000;
// console.log(percentOfWorld1(chinaPopulation));

//Question-11
var population = [1428627663, 68200000, 241495112, 36408818];
console.log(population.length == 4);
var percentages = [];
var worldPopulation = 7900000000;
function percentOfWorld1(pop) { 
    return (pop / worldPopulation) * 100;
}
for (var i = 0; i < population.length; i++) {
    percentages[i] = percentOfWorld1(population[i]); 
}
console.log(percentages); 
