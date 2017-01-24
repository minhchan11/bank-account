//BUSINESS LOGIC
var total = 0;
//Constructor
function Account(fullname,statement) {
  this.fullname = fullname;
  this.statements = [];
}

function statements(initial, deposit, withdrawal) {
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


    $(".information").each(function() {
    var name = $(this).find("input.name").val();
    var initialInput = $(this).find("input.initial").val();
    var depositInput = $(this).find("input.deposit").val();
    var withdrawalInput =$(this).find("input.withdrawal").val();
    var userAccount = new Account(name, initialInput, depositInput, withdrawalInput);
    console.log(userAccount);
  });

    // userAccount.Total();
    // console.log(total);
    // $(".name").text(name);
    // $("input#output").val(total);
  });
});
