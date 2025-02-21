class cart{
    constructor(){
        this.cart=[];
        this.message="welcome";
    }
addItem(name,price){
    this.cart.push({name,price});
}
removeItem(name){
    this.cart=this.cart.filter((item)=>item.name!==name);
}
calculateTotal(){
let total=0;
}