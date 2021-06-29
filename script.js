$(document).ready(
    function () {
        var order = [];
        var cost=0;
        function Pizza(price, size, crust, top) {
            this.pizzaPrice = price;
            this.pizzaSize = size;
            this.pizzaCrust = crust;
            this.pizzaTop = top;
        }
        var pizza1 = new Pizza(300, "small", "cripsy", "pepperoni");
        var pizza2 = new Pizza(650, "medium", "cripsy", "pepperoni");
        var pizza3 = new Pizza(900, "large", "cripsy", "pepperoni");
        var pizza4 = new Pizza(450, "small", "stuffed", "pepperoni");
        var pizza5 = new Pizza(650, "medium", "stuffed", "pepperoni");
        var pizza6 = new Pizza(900, "large", "stuffed", "pepperoni");
        var pizza7 = new Pizza(400, "small", "flatbread", "pepperoni");
        var pizza8 = new Pizza(650, "medium", "flatbread", "pepperoni");
        var pizza9 = new Pizza(900, "large", "flatbread", "pepperoni");
        var pizza10 = new Pizza(500, "small", "cripsy", "cheese");
        var pizza11 = new Pizza(650, "medium", "cripsy", "cheese");
        var pizza12 = new Pizza(900, "large", "cripsy", "cheese");
        var pizza13 = new Pizza(400, "small", "stuffed", "cheese");
        var pizza14 = new Pizza(650, "medium", "stuffed", "cheese");
        var pizza15 = new Pizza(900, "large", "stuffed", "cheese");
        var pizza16 = new Pizza(350, "small", "flatbread", "cheese");
        var pizza17 = new Pizza(650, "medium", "flatbread", "cheese");
        var pizza18 = new Pizza(900, "large", "flatbread", "cheese");
        var pizza19 = new Pizza(450, "small", "cripsy", "mushroom");
        var pizza20 = new Pizza(650, "medium", "cripsy", "mushroom");
        var pizza21 = new Pizza(900, "large", "cripsy", "mushroom");
        var pizza22 = new Pizza(300, "small", "stuffed", "mushroom");
        var pizza23 = new Pizza(650, "medium", "stuffed", "mushroom");
        var pizza24 = new Pizza(900, "large", "stuffed", "mushroom");
        var pizza25 = new Pizza(450, "small", "flatbread", "mushroom");
        var pizza26 = new Pizza(650, "medium", "flatbread", "mushroom");
        var pizza27 = new Pizza(900, "large", "flatbread", "mushroom");
        var allPizza = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, pizza10, pizza11, pizza12, pizza13, pizza14, pizza15, pizza16, pizza17, pizza18, pizza19, pizza20, pizza21, pizza22, pizza23, pizza24, pizza25, pizza26, pizza27];
        let result = [pizza1,pizza4,pizza10,pizza13,pizza16,pizza19,pizza22,pizza25];
        
        $("#order").submit(
            function(e){ 
                
                e.preventDefault();
                var top=$("#top").val();
                var crust=$("#crust").val();
                var size=$("#size").val();
                var location=$("#location").val();
                
                 
                addOrder(top,crust,size);
               $("#cart").text(order.length);
               $("#count").text(order.length);
               $("#fee").text(location);               
               $(".cbody").text('');
               showOrder();
               getTotal(order,location);
               if(location==0){$("#place").text("None");}
               else if(location==50){$("#place").text("CBD");$("#fee").text(location);}
               else if(location==100){$("#place").text("Yaya");}
               else if(location==200){$("#place").text("Muthaiga");}
               else if(location==400){$("#place").text("Westlands");}
               else if(location==200){$("#place").text("Ngong");}  
               getDeliveryPrice();    
        });
        function getTotal(ar,del){
            var total=0;
            for(let i=0;i<ar.length;i++){
                total=total+parseInt(ar[i].pizzaPrice);
            }
            return $("#total").text(parseInt(del)+total);
        }
        function addOrder(top,crust,size){
            for(let i=0;i<allPizza.length;i++){
                if(allPizza[i].pizzaSize==size && allPizza[i].pizzaCrust==crust && allPizza[i].pizzaTop==top){
                    order.push(allPizza[i]);
                    
                }
            }
        }
        function getDeliveryPrice(price){
            $("")
        }
        $("#cart").text(order.length);
        $(".checkout").hide();
        $("#cart").click(function(){
            $(".checkout").show();
            $(".orderCard").hide();
        });
        $("#cancel").click(
            function(){
                $(".checkout").hide();
            $(".orderCard").show();
            }
        );
    function showOrder(){
        if(order.length>0){
            for(let i=0;i<order.length;i++){
               // var me=parseInt(order[i].pizzaPrice);
               $(".cbody").append('<div class="card mb-2 orderholder"><div class="row card-body"><div class="col-11"><div class="row"><div class="col-3">'+order[i].pizzaSize+'</div><div class="col-3">'+order[i].pizzaCrust +'</div><div class="col-2">' +order[i].pizzaPrice +'</div><div class="col-3">'+order[i].pizzaTop+'</div><div class="col-1 orderRemove btn-danger">X</div></div></div></div>'); 
            }
        }
    }
    

        
});
function _(el){
    return document.getElementById(el);
}