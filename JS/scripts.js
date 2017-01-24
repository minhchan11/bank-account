//BUSINESS LOGIC
var total = 0;
//Convert all NaN into 0
function getNum(val) {
   if (val === "") {
     return 0;
   }
   return parseInt(val);
}
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
Statements.prototype.Total = function() {
  total += this.initial += this.deposit -= this.withdrawal;
}

//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    //Define variable using Constructor Account
    var name = $(this).find("input.name").val();
    var userAccount = new Account (name);
    console.log(userAccount);

    //Define variable using Constructor Statements
    $(".information").each(function() {
      var initialInput = getNum($(this).find("input.initial").val());
      var depositInput = getNum($(this).find("input.deposit").val());
      var withdrawalInput =getNum($(this).find("input.withdrawal").val());
      var userStatement = new Statements(initialInput, depositInput, withdrawalInput);

      userAccount.Statements.push(userStatement);
      userStatement.Total();
      console.log(userStatement);

      $(".results").show();
      $("ul#balance").append("<li>"+"Your most recent deposit: $"+ depositInput + " and your most recent withdrawal: $" + withdrawalInput + "." + "</li>")
      $(".name").text(userAccount.fullname);
      $("input#output").val(total);
    });

  });
});
