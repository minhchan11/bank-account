//BUSINESS LOGIC
var total = 0;
//Constructor
function Account(fullname,initial,deposit,withdrawal) {
  this.fullname = fullname;
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

//Account Prototype for Total Amount of Funds
Account.prototype.Total = function() {
  return total += this.initial += this.deposit -= this.withdrawal;
}

//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var initialInput = parseInt($("input#initial").val());
    var depositInput = parseInt($("input#deposit").val());
    var withdrawalInput =parseInt($("input#withdrawal").val());
    var userAccount = new Account(name, initialInput, depositInput, withdrawalInput);
    userAccount.Total();
    console.log(total);
    $(".name").text(name);
    $("input#output").val(total);
  });
});
