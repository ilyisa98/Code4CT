// 'use strict';

//slider

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  

}


//automatic slider

//var myIndex = 0;
//carousel();
//
//function carousel() {
//    var i;
//    var x = document.getElementsByClassName("mySlides");
//    for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";  
//    }
//    
//    myIndex++;
//    if (myIndex > x.length) {myIndex = 1}    
//    x[myIndex-1].style.display = "block";  
//    setTimeout(carousel, 5000); // Change image every 2 seconds
//}


//count up

var c = 0, d = 0, e = 0, f = 0, g = 0;
var t;
var happy_client_num_end = 1050, finish_project_num_end = 1850, cup_of_coffee_num_end = 3000, working_days_num_end = 3300, honors_awards_num_end = 2600;

var timer_is_on = 0;

//init function
function timedCount1() {
    //if value is not = to end value, add 1
    if (c != happy_client_num_end){
        c = c + 1;
    }
        t = setTimeout(timedCount1, 0);
    
    //write each change to id
        document.getElementById("happy_client_num").innerHTML = (c + "+" );

    } timedCount1(); //run function



function timedCount2() {
    
    if (d != finish_project_num_end){
        d = d + 1;
    }
        t = setTimeout(timedCount2, 0);
        document.getElementById("finish_project_num").innerHTML = (d + "+" );

    } timedCount2();

function timedCount3() {
    
    if (e != cup_of_coffee_num_end){
        e = e + 1;
    }
        t = setTimeout(timedCount3, 0);
        document.getElementById("cup_of_coffee_num").innerHTML = (e + "+" );

    } timedCount3();

function timedCount4() {
    
    if (f != working_days_num_end){
        f = f + 1;
    }
        t = setTimeout(timedCount4, 0);
        document.getElementById("working_days_num").innerHTML = (f + "+" );

    } timedCount4();

//function timedCount5() {
//    
//    if (g != honors_awards_num_end){
//        g = g + 1;
//    }
//        t = setTimeout(timedCount5, 0);
//        document.getElementById("honors_awards_num").innerHTML = (g + "+" );
//
//    } timedCount5();


//////////////////////////////////////back to top btn////////////////////////////////////

// When the user scrolls down 20px from the top of the document, show the button


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
} scrollFunction();


