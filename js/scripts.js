//Backend Logic


function Order(size, topping, price) {
  this.size = size,
  this.topping = topping,
  this.price = price.setPrice
  console.log("order");
}

Order.prototype.setPrice = function(size, topping, price) {
  console.log("price is working");
  if ((this.size === "xlrg") && (this.topping !== "cheese")) {
    return price += 8;
    console.log(price);
  } else if ((this.size === "xlrg") && (this.topping === "cheese") || (this.size === "lrg") && (this.topping !== "cheese")) {
    return price + 6;
    console.log(price);
  } else if ((this.size === "lrg") && (this.topping === "cheese") || (this.size === "med") && (this.topping !== "cheese")) {
    return price + 3;
    console.log(price);
  }   else {
    return price;
    console.log("price");
  }
}

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var size = $("input:radio[name=size]:checked").val();
    console.log(size);
    var topping = $("input:radio[name=topping]:checked").val();
    console.log(topping);
    var price = 8;
    var newOrder = new Order(size, topping, price)
    console.log(newOrder);
    var price = newOrder.setPrice(size, topping)
    console.log(price);
    event.preventDefault();
  });
});
