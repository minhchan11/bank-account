//BUSINESS LOGIC
function Account(initial,deposit,withdrawal) {
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}
//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

  });
});
