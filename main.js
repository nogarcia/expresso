var money = 0;

function getPaid(num) {
  money += num;
  $("#money").html(money);
}
var coffeeMachines = 0;
function buyCoffeeMachines(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,coffeeMachines));
    if(money >= cursorCost){
        coffeeMachines = coffeeMachines + 1;
    	money = money - cursorCost;
        $('#coffeeMachines').innerHTML = coffeeMachines;
        $('#money').innerHTML = money;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,coffeeMachines));
    document.getElementById('cursorCost').innerHTML = nextCost;
};


window.setInterval(function() {
  getPaid(coffeeMachines)
}, 1000)
