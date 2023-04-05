var YY = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var dd1 = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


document.getElementById("date").innerHTML = "  "+dd +"-" + mm +"-" +  yyyy + " - "  + (Number(dd)+1) +"-" + mm +"-" +  yyyy