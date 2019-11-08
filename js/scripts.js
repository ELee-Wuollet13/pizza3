//Backend Logic















//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var size = $("#size").val()
    console.log(size);
    var top = $("#topping").val()
    console.log(top);
    event.preventDefault();

  });
});
