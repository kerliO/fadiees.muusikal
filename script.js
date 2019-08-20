// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var img = document.getElementsByClassName('fotod');
var modalImg = document.getElementById("img01");

//Tsükkel, mis käib läbi kõik var img elemendid
var i;
for (i = 0; i < img.length; i++) {
    img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
