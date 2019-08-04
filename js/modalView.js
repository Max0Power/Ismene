"use strict";

/**
 * @creator Jussi Parviainen
 * @created 02.08.2019
 * @Copyright 2019, Sivuguru
 * Modal popup for gallery images (Single image view)
 */

 
/**
 * Init function: Handles modal viewing for gallery images
 */
window.onload = function() {
	
	// div that is used for "pop up image"
	var modal = document.getElementById("modalDiv");
	// Img component that is inside of modal
	var modalImg = document.getElementById("modalImg");
	// Let's get all images that can be viewed in modal:
	var galleryImages = document.getElementsByClassName("galleryImg");
	for(var i = 0; i < galleryImages.length; i++) {
		// Onclick events for gallery images: can be viewed on modal
		galleryImages[i].onclick = function() {
			modal.style.display = "block";
			modalImg.src = this.src;
		};
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none"; // modal is hidden
	}
};