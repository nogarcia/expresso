// expresso: main.js
// Commit 49(?), alpha version
// by Shrubhog

// Money, the stablest and most unchanging currency in the world. 
var money = 0;

// Crude updating tooltip, because ${} requires you to reload the variable after every price. Again, and again, and again. 
var tooltips = {
  coffee: "Costs $-, allows you to make coffee. It's pretty good coffee.",
  autoCoffee: "Costs $- and a coffee machine, gives an auto coffee machine and $1/s. Making coffee is pretty slow. Let's make the robots do it!",
  intern: "Costs $-. Gets you an intern to help around and make coffee. $10/s",
  croissants: "Costs $-. Hire a person to make those little french bagel things. $20/10s"
}

// another crude solution to remember how many times the buttons are pressed.
var couchSearched = 0;
var favorsDone = 0;

// functions

function getPaid(num) {
  money += num;
  $("#money").html(money);
}
function couch() {
  if (couchSearched < 9) {
    getPaid(1);
    couchSearched += 1;
  } else if (couchSearched == 9) {
    getPaid(1);
    couchSearched += 1;
    $("#couch").addClass("disabledButton");
    $( "#couch" ).tooltip( "option", "disabled", true );
  } else if (couchSearched >= 10) {
    $("#couch").addClass("disabledButton");
  }
}
function favor() {
  if (favorsDone < 8) {
    getPaid(10);
    favorsDone += 1;
  } else if (favorsDone == 8) {
    getPaid(10);
    favorsDone += 1;
    $("#favor").addClass("disabledButton");
    $( "#favor" ).tooltip( "option", "disabled", true );
  } else if (couchSearched >= 9) {
    $("#couch").addClass("disabledButton");
  }
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
        var nextCost = Math.floor(100 * Math.pow(1.1,coffeeMachines));
        var priceTooltip1 = tooltips.coffee.split("-");
        var priceTooltip2 = priceTooltip1[0] + nextCost + priceTooltip1[1];
        $("button#buyCoffeeMachine").attr("title", priceTooltip2)
    };
    
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
        var nextCost = Math.floor(50 * Math.pow(1.1,autoCoffees));
        var priceTooltip1 = tooltips.autoCoffee.split("-");
        var priceTooltip2 = priceTooltip1[0] + nextCost + priceTooltip1[1];
        $("button#buyAutoCoffee").attr("title", priceTooltip2)
    };
    
};
var interns = 0;
function hireIntern() {
  if (haveBasement) {
    var internCost = Math.floor(50 * Math.pow(1.1,interns));
    console.log(internCost)
    if(money >= internCost){
        console.log("Can buy it!")
        if (typeof $("#interns").html() == "undefined") {
          $(".info").append("Interns: <span id='interns'></span><br>")
          $("#interns").html(interns)
        }
        interns += 1;
    	  money = money - internCost;
        $('#interns').html(interns);
        $('#money').html(money);
        var nextCost = Math.floor(50 * Math.pow(1.1,interns));
        var priceTooltip1 = tooltips.intern.split("-");
        var priceTooltip2 = priceTooltip1[0] + nextCost + priceTooltip1[1];
        $("button#hireIntern").attr("title", priceTooltip2)
    };
  }
};

var croissants = 0;

function hireCroissantMaker() {
  if (haveBasement) {
    var croissantCost = Math.floor(75 * Math.pow(1.1,croissants));
    console.log(croissantCost)
    if(money >= croissantCost){
        console.log("Can buy it!")
        if (typeof $("#croissant").html() == "undefined") {
          $(".info").append("Croissant Makers: <span id='croissant'></span><br>")
          $("#croissant").html(interns)
        }
        croissants += 1;
    	  money = money - croissantCost;
        $('#croissant').html(croissants);
        $('#money').html(money);
        var nextCost = Math.floor(75 * Math.pow(1.1,croissants));
        var priceTooltip1 = tooltips.croissants.split("-");
        var priceTooltip2 = priceTooltip1[0] + nextCost + priceTooltip1[1];
        $("button#hireCroissantMaker").attr("title", priceTooltip2)
    };
  }
};

var haveBasement = false;
function buyBasement() {
  if (!haveBasement && money > 200) {
    money = money - 200;
    haveBasement = true;
  }
}

// game clock, set to every quarter of a second because every second is too slow for me.

window.setInterval(function() {
  getPaid(autoCoffees * 1.375);
  getPaid(interns * 2.5);
}, 250)
// second game clock that is set to 2.5 seconds because that is four times faster than ten seconds.
window.setInterval(function() {
  getPaid(croissants * 20);
}, 2500)