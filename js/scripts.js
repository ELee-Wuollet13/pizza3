//Backend Logic










function Order(size, topping) {
  this.size = size,
  this.topping = topping
  // this.price = price
}


//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var size = $("#size").val()
    console.log(size);
    var topping = $("#topping").val()
    event.preventDefault();
    var newOrder = new Order(size, topping)
    console.log(newOrder);
  });
});
