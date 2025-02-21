// let person={
//     name:"sreejitha",
//     age:21,
//     place:"salem",
// };
// for(let key in person){
//     console.log(`${key}:${person[key]}`);
// }

//class in js 
// class PersonClass{
//     constructor(name){
//         this.setName(name);
//     }
//     getName(){
//         return this.name;
//     }
//     setName(newName){
//         newName = newName.trim();
//         if(newName===""){
//             throw 'the name cannot be empty';
//         }
//         this.name=newName;
//     }
// }
//     let person=new PersonClass('smith john');
//     console.log(person);
//     person.setName('jane smith');
//     console.log(person.getName());

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (!newName) {
//             console.log('Name cannot be empty');
//             return;
//         }
//         this.name = newName;
//     }
//     setBalance(newBalance) {
//         if (newBalance < 0) {
//             console.log('Balance cannot be negative');
//             return;
//         }
//         this.balance = newBalance;
//     }
//     getName() {
//         return this.name;
//     }
//     getBalance() {
//         return this.balance;
//     }
//     deposit(newDeposit){
//         this.balance+=newDeposit;
//     }
// }

// let acc = new BankAccount('Sreejitha', 5000);
// console.log(acc);
// console.log("New balance after depositing : ");
// var newBalance=acc.deposit(300);
// console.log(newBalance);


