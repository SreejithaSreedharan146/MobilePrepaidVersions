// let message="hi";
// function getMessage(){
//     return message;
// }
// function setMessage(msg){
//     message=msg;
// }
// module.exports={message,getMessage,setMessage};

// simple shopping cart using module in js

let ShoppingCart=[];
function addItem(name,price){
    ShoppingCart.push({name,price})
}
function removeItem(name){
    ShoppingCart=ShoppingCart.filter(item=>item.name!==name);
}
function message(){
    return "welcome to our shopping cart";
}
module.exports={message,addItem,removeItem};

addItem("saree",300);
addItem("purse",50);
console.log(ShoppingCart);

removeItem("saree");
console.log(ShoppingCart);