//Backend Logic


function order(size, topping, price) {
  this.size = size,
  this.topping = topping,
  this.price = price
  console.log("order");
}

order.prototype.setPrice = function() {
  var price = 8;
  console.log("price");
  if ((this.size === xlrg) && (this.topping !== cheese)) {
    return price += 8;
    console.log(price);
  } else if ((this.size === xlrg) && (this.topping === cheese) || (this.size === lrg) && (this.topping !== cheese)) {
    return price + 6;
  } else if ((this.size === lrg) && (this.topping === cheese) || (this.size === med) && (this.topping !== cheese)) {
    return price + 3;
  }   else {
    return price;
  }
}

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var size = $("#size").val()
    var topping = $("#topping").val()
    event.preventDefault();
    var newOrder = new order(size, topping)
    console.log(newOrder);
  });
});
