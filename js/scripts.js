$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var addressInput = $("input#address").val();
    var emailInput= $("input#email").val();
    var phonenoInput = $("input#phoneno").val();

    $(".person1").text(person1Input);
    $(".address").text(addressInput);
    $(".email").text(emailInput);
    $(".phoneno").text(phonenoInput);

    $("#story").show();

    event.preventDefault();
  });
});
