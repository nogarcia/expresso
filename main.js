var money = 0;

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
};

var autoCoffees = 0;
function buyAutoCoffee(){

    var autoCoffeeCost = Math.floor(50 * Math.pow(1.1,autoCoffees));
    if(money >= autoCoffeeCost && coffeeMachines > 1){
        if (typeof $("#autoCoffees").html() == "undefined") {
          $(".info").append("Auto Coffee Machines: <span id='autoCoffees'></span><br>")
          $("#autoCoffees").html(autoCoffees)
        }
        autoCoffees += 1;
    	  money = money - autoCoffeeCost;
        coffeeMachines = coffeeMachines - 1;
        $('#autoCoffees').html(autoCoffees);
        $('coffeeMachines').html(coffeeMachines);
        $('#money').html(money);
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,coffeeMachines));
};

window.setInterval(function() {
  getPaid(autoCoffees);
}, 1000)
