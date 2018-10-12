var money = 0;

var tooltips = {
  coffee: "Costs $-, allows you to make coffee. It's pretty good coffee.",
  autoCoffee: "Costs $- and a coffee machine, gives an auto coffee machine and $1/s. Making coffee is pretty slow. Let's make the robots do it!"
}

function getPaid(num) {
  money += num;
  $("#money").html(money);
}
var coffeeMachines = 0;
function buyCoffeeMachines(){

    var coffeeMachineCost = Math.floor(100 * Math.pow(1.1,coffeeMachines));
    if(money >= coffeeMachineCost){
        if (typeof $("#coffeeMachines").html() == "undefined") {
          $(".info").append("Coffee Machines: <span id='coffeeMachines'></span><br>")
          $("#coffeeMachines").html(coffeeMachines)
        }
        coffeeMachines = coffeeMachines + 1;
    	  money = money - coffeeMachineCost;
        $('#coffeeMachines').html(coffeeMachines);
        $('#money').html(money);
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,coffeeMachines));
    var priceTooltip1 = tooltips.coffee.split("-");
    var priceTooltip2 = priceTooltip1[0] + nextCost + priceTooltip1[1];
    $("button#buyCoffeeMachine").attr("title", priceTooltip2)
};

var autoCoffees = 0;
function buyAutoCoffee() {
    var autoCoffeeCost = Math.floor(50 * Math.pow(1.1,autoCoffees));
    console.log(autoCoffeeCost)
    if(money >= autoCoffeeCost && coffeeMachines > 0){
        console.log("Can buy it!")
        if (typeof $("#autoCoffees").html() == "undefined") {
          $(".info").append("Auto Coffee Machines: <span id='autoCoffees'></span><br>")
          $("#autoCoffees").html(autoCoffees)
        }
        autoCoffees += 1;
    	  money = money - autoCoffeeCost;
        coffeeMachines = coffeeMachines - 1;
        $('#autoCoffees').html(autoCoffees);
        $('#coffeeMachines').html(coffeeMachines);
        $('#money').html(money);
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,autoCoffees));
    var priceTooltip1 = tooltips.autoCoffee.split("-");
    var priceTooltip2 = priceTooltip1[0] + nextCost + priceTooltip1[1];
    $("button#buyAutoCoffee").attr("title", priceTooltip2)
};

window.setInterval(function() {
  getPaid(autoCoffees);
}, 1000)
