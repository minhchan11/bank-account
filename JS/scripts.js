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
Account.prototype.total = function() {
  return total += this.initial += this.deposit -= this.withdrawal;
}

//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

  });
});
