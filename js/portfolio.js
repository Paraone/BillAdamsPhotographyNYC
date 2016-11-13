// stopping the automation for the slideshow
clearInterval(interval);
//setting variables to be used
var holder = document.getElementById('photoHolder');//holds thumbnails
var close = document.getElementById('close');//closing x for the modal
var slideshow = document.getElementById('imageSlideshow');//the slideshow in the modal
//photo[]array
var photo = document.getElementsByClassName('photo');
//setting onclick listener for photo[s]
for(let i = 0; i<photo.length; i++){
		photo[i].onclick = function(){
			currSlide(i);
			slideshow.style.display="block";
		};
}
//start animation of thumbnail intro
setTimeout(function(){
	holder.style.width = 1000+"px";
	holder.style.maxHeight = 5000+"px";
}, 500);
//assign a closing function to the 'close' element
close.onclick = function(){
	slideshow.style.display="none";
}