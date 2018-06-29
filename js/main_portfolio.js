
//prettyPhoto      
          
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");

var i;
for (i = 0; i < images.length; i++) {
   images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
   }
}

          
//pagination      
      var slideIndex = 1;
          showDivs(slideIndex);

          function currentDiv(n) {
              showDivs(slideIndex = n);
          }

          function showDivs(n) {
              var i;
        var x = document.getElementsByClassName("gallery");
        
              
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "grid";  
           }
      
