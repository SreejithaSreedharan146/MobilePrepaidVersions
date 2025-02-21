// let person={
//     fname:"sree",
//     lname:"jitha"
// };
// person[Symbol.iterator]=function(){
//     let entries=Object.entries(person);
//     let index=0;
//     let done=false;
//     let next=()=>{
//         if(index<entries.length){
//             let [key,value]=entries[index++];
//             return{done:false,value:`${key}:${value}`};
//         }else{
//             return {done:true};
//         }
//     };
//     return{next};
// };
// for(let p of person) console.log(p);

// function* myfun(n) {
//     for(var i=1;i<=n;i++){
//         yield i;
//     }
// }

// var obj=myfun(5);
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());console.log(obj.next());
// console.log(obj.next());

// let person={
//     fname:"sree",
//     lname:"jitha"
// };
// person[Symbol.iterator]=function*(){
//     let entries=Object.entries(person);
//     for(let[key,value] of entries){
//         yield`${key} : ${value}`;
//     }
// }

// for(let p of person) console.log(p);

//example-2 syncronous
let biryani;
// console.log(biryani); //undefined

// function orderBiryani(){
//     console.log("Order Biryani");
//     biryani="🥘🍲🍗";
//     console.log("Biryani is ordered");
// }
 
// orderBiryani();
// console.log(`Eat ${biryani}`);


//example-2 Asyncronous

// function orderBiryani(){
//     console.log("Order Biryani");
//     setTimeout(()=>{
//     biryani="🥘🍲🍗";
//     console.log(`${biryani} is ready`);
//     },5000);
// }
// orderBiryani();
// console.log("Call sister");
// console.log(`Eat ${biryani}`);

//callback

// function orderBiryani(callback){
//     console.log("Biryani was ordered");
//     setTimeout(()=>{
//     biryani="🥘🍲🍗";
//     callback(biryani);
//     },5000);
// }


// function biryaniReady(biryani){
//     console.log(`${biryani} is ready`);
// }
// orderBiryani(biryaniReady);
// console.log("Call sister");

//Example-Async with promise

let biryaniOrder=new Promise((resolve,reject)=>{
    console.log("Ordering biryani......");
    setTimeout(()=>{
        let isAvailable=false; //simulate the availability
        // let isAvailable=true;
        if(isAvailable){
            resolve("🥘🍲🍗 Biryani is ready");
        }else{
            reject("❌ 🥲   Sorry, no biryani today");
        }
    },5000);
});
console.log(biryaniOrder);
biryaniOrder
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});

console.log(biryaniOrder);

//async and await

async function orderBiryani() {
    try{
        console.log("Placing order.........");
        let result=await biryaniOrder;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
orderBiryani();