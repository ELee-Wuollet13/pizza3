//Backend Logic
function Order(size, topping) {
  this.size = size,
  this.topping = topping,
  this.price = 8
}

Order.prototype.setPrice = function(size, topping) {
  if ((this.size === "extralarge") && (this.topping !== "cheese")) {
    this.price += 8;
  } else if ((this.size === "extralarge") && (this.topping === "cheese") || (this.size === "large") && (this.topping !== "cheese")) {
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
    // newOrder.showPizza()
    console.log(newOrder);
    event.preventDefault();

    //Display to user
    $("#output").html("<h3> Your order </h3><br><p>You ordered one " + newOrder.size + " pizza with" + newOrder.topping + ". Your total will be $" + newOrder.price + " on pickup. Thanks for coming to Joe's simple pie, keeping pizza the way it should be.");
  });
});
// $("#img +" this.topping).show()
// $(".imgveggies").show()
// $(".imgcheese").show()
// Order.prototype.showPizza = function(topping) {
  //   if (this.topping = "meat"){
    //   } else if (this.topping = "veggies") {
      //   } else if (this.topping = "cheese") {
        //     $(".imgmeat").hide()
        //   } else {
          //     $("imgpizzadudes").show()
          //     $(".imgmeat").hide()
          //   }
          // }
