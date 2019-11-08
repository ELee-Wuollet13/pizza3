//Backend Logic


//UI Logic
$(document).ready(function() {
var nums = []
  $("form").click(function(event) {
    event.preventDefalut;
var num = ($(this).val());
console.log(num);
nums.push(num)
console.log("run");
  });
console.log(nums);
});
