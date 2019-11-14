//Backend Logic


function Order(size, topping) {
  this.size = size,
  this.topping = topping,
  this.price = 8
}

Order.prototype.setPrice = function(size, topping) {
  if ((this.size === "xlrg") && (this.topping !== "cheese")) {
    this.price += 8;
  } else if ((this.size === "xlrg") && (this.topping === "cheese") || (this.size === "lrg") && (this.topping !== "cheese")) {
    this.price += 6;
  } else {
    this.price += 3;
  }
}


//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var size = $("input:radio[name=size]:checked").val();
    var topping = $("input:radio[name=topping]:checked").val();
    var newOrder = new Order(size, topping)
    newOrder.setPrice()
    console.log(newOrder);
    event.preventDefault();
//Display to user
    $("#output").html("<h3>" + newOrder.size + "</h3><br><h3>" + newOrder.topping + "</h3><br><h3>" + newOrder.price + "</h3>");
  });

  });
