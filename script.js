$(document).ready(
    function () {
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
        var pizza4 = new Pizza(400, "small", "stuffed", "pepperoni");
        var pizza5 = new Pizza(650, "medium", "stuffed", "pepperoni");
        var pizza6 = new Pizza(900, "large", "stuffed", "pepperoni");
        var pizza7 = new Pizza(400, "small", "flatbread", "pepperoni");
        var pizza8 = new Pizza(650, "medium", "flatbread", "pepperoni");
        var pizza9 = new Pizza(900, "large", "flatbread", "pepperoni");
        var pizza10 = new Pizza(400, "small", "cripsy", "cheese");
        var pizza11 = new Pizza(650, "medium", "cripsy", "cheese");
        var pizza12 = new Pizza(900, "large", "cripsy", "cheese");
        var pizza13 = new Pizza(400, "small", "stuffed", "cheese");
        var pizza14 = new Pizza(650, "medium", "stuffed", "cheese");
        var pizza15= new Pizza(900, "large", "stuffed", "cheese");
        var pizza16 = new Pizza(400, "small", "flatbread", "cheese");
        var pizza17 = new Pizza(650, "medium", "flatbread", "cheese");
        var pizza18 = new Pizza(900, "large", "flatbread", "cheese");
        var pizza19 = new Pizza(400, "small", "cripsy", "mushroom");
        var pizza20 = new Pizza(650, "medium", "cripsy", "mushroom");
        var pizza21 = new Pizza(900, "large", "cripsy", "mushroom");
        var pizza22 = new Pizza(400, "small", "stuffed", "mushroom");
        var pizza23 = new Pizza(650, "medium", "stuffed", "mushroom");
        var pizza24 = new Pizza(900, "large", "stuffed", "mushroom");
        var pizza25 = new Pizza(400, "small", "flatbread", "mushroom");
        var pizza26 = new Pizza(650, "medium", "flatbread", "mushroom");
        var pizza27 = new Pizza(900, "large", "flatbread", "mushroom");
        var allPizza = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, pizza10, pizza11, pizza12, pizza13, pizza14, pizza15,pizza16, pizza17, pizza18, pizza19, pizza20, pizza21, pizza22, pizza23, pizza24, pizza25, pizza26, pizza27];
        let result = [];

        
        $("#small").click(function () {

            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {

                if (allPizza[i].pizzaSize == "small") {

                    result.push(allPizza[i]);

                }
            }
            getResult();
        });
        $("#medium").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaSize == "medium") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#large").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaSize == "large") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#cripsy").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaCrust == "cripsy") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#stuff").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaCrust == "stuffed") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#flatbread").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaCrust == "flatbread") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#pepperoni").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaTop == "pepperoni") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#mushroom").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaTop == "mushroom") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });
        $("#cheese").click(function () {
            result = [];
            $("#itemholder").text('');
            for (let i = 0; i < allPizza.length; i++) {
                if (allPizza[i].pizzaTop == "cheese") {
                    result.push(allPizza[i]);
                }
            }
            getResult();
        });

    
    function getResult(){
        for (let i = 0; i < result.length; i++) {

            $("#itemholder").append('<div class="card pholder">' +
                '<div class="imageholder"></div>' +
                '<span>Price: ' + result[i].pizzaPrice + '</span>' +
                '<span>Size: ' + result[i].pizzaSize + '</span>' +
                '<span>Top: ' + result[i].pizzaTop + '</span>' +
                '<span>Crust: ' + result[i].pizzaCrust + '</span>' +
                '<div class="btn btn-primary btn-w"> Order' +
                '</div>' +
                '</div>');

        }
    }
});