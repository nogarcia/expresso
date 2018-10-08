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
    var nextCost = Math.floor(10 * Math.pow(1.1,coffeeMachines));
};


window.setInterval(function() {
}, 1000)
