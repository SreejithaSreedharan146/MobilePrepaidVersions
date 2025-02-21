// const userInput = prompt("Enter the value:");
// const a=prompt("Enter a: ");
// const b=prompt("Enter b: ");
// const value=evaluate(userInput,a,b);
// switch(userInput){
//     case "sum":
//         function evaluate(a){
//             return function(b){
//                 return a+b;
//             }
//         }
// }

// console.log(value);



function evaluate(op){
    return function(a){
        return function(b){
            if(op=="sum") return "sum="+(a+b);
            else if(op="sub") return "sub="+(a-b);
            else if(op="mul") return "mul="+(a*b);
            else if(op="div") return "div="+(a/b);
            else return("Invalid")
        };
    };
};
console.log(evaluate("sum"(2)(4)));
console.log(evaluate(("sub")(2)(4)));
console.log(evaluate(("mul")(2)(4)));
console.log(evaluate(("div")(2)(4)));


