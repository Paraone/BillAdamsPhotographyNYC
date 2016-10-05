//building slide array
var x = document.getElementsByClassName("slide");
var dots = "";//holds html content of #dots

for(var i=0; i<x.length; i++){
  //create corresponding dot
  if(i == x.length-1)
    dots += "<a id='dot"+i+"' class='dot' onclick='currSlide("+(i)+")'>&#10070;</a>";
  else
    dots += "<a id='dot"+i+"' class='dot' onclick='currSlide("+(i)+")'>&#10070;</a>&nbsp;";
}
document.getElementById("dots").innerHTML = dots;

/* starting with the first slide/image */
var slideNo = 0;
slideShow(slideNo);
var interval = setInterval(moveSlide, 10000);

/* function moves slide to the nth place */
function currSlide(n) {
  slideShow(slideNo = n);
}

/* function to increment slideNo: */
function moveSlide(n){
    if(!n) n = 1;
     slideNo += n;
     slideShow(slideNo); 
}

/*following function displays slide show */
function slideShow(n){
    
    // keep slideNo within the range of the array x
    if(n < 0) {
      slideNo = x.length-1;
    }
    if (n > x.length-1){
        slideNo = 0;
    }
    
    // Hide all slides in for loop
    for (var i=0; i < x.length; i++){
        x[i].style.display="none";
        document.getElementById("dot"+i).style.color="black";
    }
  
  //display slideNo 'n'
    x[slideNo].style.display="block"
    document.getElementById("dot"+slideNo).style.color="red";
    document.getElementById('mainSlide').style.width = x[slideNo].style.width;
}