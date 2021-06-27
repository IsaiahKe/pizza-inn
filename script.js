$(document).ready(
    function(){
    var order = [];
function Pizza(price, size, crust, top) {
    this.pizzaPrice = price;
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaTop = top;
}
var pizza1 = new Pizza(400, "small", "cripsy", "pepperoni");
var pizza2 = new Pizza(650, "medium", "cripsy", "pepperoni");
var pizza3 = new Pizza(900, "large", "cripsy", "pepperoni");
var pizza4 = new Pizza(1100, "xlarge", "cripsy", "pepperoni");
var pizza5 = new Pizza(400, "small", "stuffed", "pepperoni");
var pizza6 = new Pizza(650, "medium", "stuffed", "pepperoni");
var pizza7 = new Pizza(900, "large", "stuffed", "pepperoni");
var pizza8 = new Pizza(1100, "xlarge", "stuffed", "pepperoni");
var pizza9 = new Pizza(400, "small", "flatbread", "pepperoni");
var pizza10 = new Pizza(650, "medium", "flatbread", "pepperoni");
var pizza11 = new Pizza(900, "large", "flatbread", "pepperoni");
var pizza12 = new Pizza(1100, "xlarge", "flatbread", "pepperoni");
var pizza13 = new Pizza(400, "small", "cripsy", "cheese");
var pizza14 = new Pizza(650, "medium", "cripsy", "cheese");
var pizza15 = new Pizza(900, "large", "cripsy", "cheese");
var pizza16 = new Pizza(1100, "xlarge", "cripsy", "cheese");
var pizza17 = new Pizza(400, "small", "stuffed", "cheese");
var pizza18 = new Pizza(650, "medium", "stuffed", "cheese");
var pizza19 = new Pizza(900, "large", "stuffed", "cheese");
var pizza20 = new Pizza(1100, "xlarge", "stuffed", "cheese");
var pizza21 = new Pizza(400, "small", "flatbread", "cheese");
var pizza22 = new Pizza(650, "medium", "flatbread", "cheese");
var pizza23 = new Pizza(900, "large", "flatbread", "cheese");
var pizza24 = new Pizza(1100, "xlarge", "flatbread", "cheese");
var pizza25 = new Pizza(400, "small", "cripsy", "mushroom");
var pizza26 = new Pizza(650, "medium", "cripsy", "mushroom");
var pizza27 = new Pizza(900, "large", "cripsy", "mushroom");
var pizza28 = new Pizza(1100, "xlarge", "cripsy", "mushroom");
var pizza29 = new Pizza(400, "small", "stuffed", "mushroom");
var pizza30 = new Pizza(650, "medium", "stuffed", "mushroom");
var pizza31 = new Pizza(900, "large", "stuffed", "mushroom");
var pizza32 = new Pizza(1100, "xlarge", "stuffed", "mushroom");
var pizza33 = new Pizza(400, "small", "flatbread", "mushroom");
var pizza34 = new Pizza(650, "medium", "flatbread", "mushroom");
var pizza35 = new Pizza(900, "large", "flatbread", "mushroom");
var pizza36 = new Pizza(1100, "xlarge", "flatbread", "mushroom");
var allPizza = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, pizza10, pizza11, pizza12, pizza13, pizza14, pizza15, pizza17, pizza18, pizza19, pizza20, pizza21, pizza22, pizza23, pizza24, pizza25, pizza26, pizza27, pizza28, pizza29, pizza30, pizza31, pizza32, pizza33, pizza34, pizza35, pizza36];
let result = [];


function getPizzaSize(type) {
    result=[];
    for (let i = 0; i < allPizza.length; i++) {
        
        if (allPizza[i].pizzaSize == type){

            result.push(allPizza[i]);
        }
    }
}
function getPizzaTop(type) {
    result=[];
    for (let i = 0; i < allPizza.length; i++) {
        
        if (allPizza[i].pizzaSize == type){

            result.push(allPizza[i]);
        }
    }
}
function getPizzaCrust(type) {
    result=[];
    for (let i = 0; i < allPizza.length; i++) {
        
        if (allPizza[i].pizzaSize == type){

            result.push(allPizza[i]);
        }
    }
}
    });
    
