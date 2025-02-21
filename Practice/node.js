
// (function(){
// console.log("hi");
// })();

// for(var i=1;i<=3;i++){
//     console.log(function(){
//         return i;
//     }());
// }

// for(var i=1;i<=3;i++){
//    (function(i,message){
//         console.log(`${i}:message`);
//         })(i,"greet");
//     }
    
// console.log(a);
// var a;   //undefined

// console.log(b);
// let b;  //Identifier 'a' has already been declared

//no error for normal function
//  print("guest!"); --> print is not a function
//function expressions
// var print=function(message){
//     console.log('goodmorning ${message}');   
// }
// print("he");
//arrowfn
// var print=(message)=>console.log('goodmorning ${message}'); 

//1
// var i=10;
//    (function(i){
//     if(i%2==0){
//         console.log(`Fast processing`);
//     }else{
//         console.log(`Extra verification`);
//     }
//         })(i);

//2
// reverse the username
// var name="sreejitha";
//    (function(name){
//     var reversed;
//     for(var i=name.length-1;i>=0;i--){
//         reversed+=name[i];
//         // console.log(name[i]);
//     }
//     console.log(reversed);
//    })(name);

   //3

// function showMessage(){
//     console.log("fn passed as arguments");
// }
// function callShowMessage(message,callback){
//     console.log(message);
//     callback();
// }
// callShowMessage("1.Function types",showMessage);

// filter the even numbers from array and keep odd numbers

// var arr=[1,2,3,4,5,6,7,8,9,10];
// var oddNumbers=arr.filter(function(num){
//     return num%2!=0;
// });
// console.log(oddNumbers);


//pass value as anonymous function
// function callShowMessage(message,callback){
//     console.log(message);
//     callback();
// }
// callShowMessage("1.Function types",function()
// {
//     console.log("fn passed as arguments");
// });

//function returned from function

// function authorize(role){
//     return function(userrole){
//         return userrole==role?"Access granted":"Access denied";
//     }
// }
// const isAdmin=authorize("admin");
// console.log(isAdmin("admin"));
// console.log(isAdmin("user"));

// var name="sreejitha";
// var reversed="";
// function reverse(){
//     for(var i=name.length-1;i>=0;i--){
//         reversed+=name[i];
//     }
// }
// reverse();
// function palindrome(reversed){
// return function(nameString){
//     return nameString==reversed?"Palindrome":"Not a Palindrome";
// }
// }
// const isPalindrome=palindrome(reversed);
// console.log(isPalindrome("sreejitha"));
// console.log(isPalindrome("ahtijeers"));

// function sum(...args){
//     let total=0;
//     for(const a of args){
//         total+=a;
//     }
//     return total;
// }

// var  a=sum(1,2,3);
// console.log(a);

// function sum(...args){
//     for(const a of args){
//         if(typeof(a)=="string"){
//             return a;
//         }
//     }
// }
// var  a=sum(true,2,"sree");
// console.log(a);

//deconstruct
// let [a,b,c, ...args]=[1,2,3,4,5,6,7,8];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(args);

// var word="happy";
// function capitalize(word){
//     return word.charAt(0).toUpperCase()+word.slice(1);
// }
// var newWord=capitalize(word);
// console.log(newWord);

// var word="happy";
// function exclamatory(word){
//     return word+"!";
// }
// var exclamatoryWord=exclamatory(word);
// console.log(exclamatoryWord);
// function repeatTwoTimes(word){
// return word+word;
// }
// var doubleWord=repeatTwoTimes(word);
// console.log(doubleWord);

// function compose(...funs){
//     return function (value) {
//         return funs.reduceRight((acc,fn)=>fn(acc),value);
//     };
// }
// let combine=compose(capitalize,exclamatory,repeatTwoTimes);
// console.log(combine("message"));

const og=[10,20,30];
const copy=[...og];
copy.push(40);
console.log(og);
console.log(copy);

const numbers=[5,10,15];
function sum(a,b,c){
    return a+b+c;
}

console.log(sum(...numbers));
const person={name:"Alice",age:25};
// console.log(...person,city:"Boston");


