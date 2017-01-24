//BUSINESS LOGIC
var total = 0;
//Constructor for Account
function Account(fullname,Statements) {
  this.fullname = fullname;
  this.Statements = [];
}
//Constructor for Statement
function Statements(initial, deposit, withdrawal) {
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

    //Define variable using Constructor Account
    var name = $(this).find("input.name").val();
    var userAccount = new Account (name);
    console.log(userAccount);

    //Define variable using Constructor Statments
    $(".information").each(function() {
    var initialInput = $(this).find("input.initial").val();
    var depositInput = $(this).find("input.deposit").val();
    var withdrawalInput =$(this).find("input.withdrawal").val();
    var userStatement = new Statements(initialInput, depositInput, withdrawalInput);

    userAccount.Statements.push(userStatement);
    console.log(userAccount);
  });
    // userAccount.Total();
    // console.log(total);
    // $(".name").text(name);
    // $("input#output").val(total);
  });
});
