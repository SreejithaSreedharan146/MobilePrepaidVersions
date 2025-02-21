function makeFunc(){
    const name="sumithra";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc=makeFunc();
myFunc();
console.log(myFunc);