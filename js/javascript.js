//alert ("Hello G");

// var a=11;

// while (a <= 30) { 
//     console.log(a);
//     a++;
// }

///// form search //////
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
///// form search //////

// var today = new Date(1996,1,10);
// console.log(today.getDay() );
