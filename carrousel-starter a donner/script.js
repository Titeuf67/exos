const imagesList = document.querySelectorAll('.carousel-slide img');

let compteur = 0;
 
function displayImage() {
  for (let i = 0; i < imagesList.length; i++) {
   imagesList[i].style.display = "none";
  }
  imagesList[compteur].style.display = "block";
}
 
nextBtn.addEventListener('click',() => {
 // Si le compteur correspond à 2 (imagesList.length - 1) alors le compteur vaudra 0 
 if (compteur == imagesList.length - 1) {
  compteur = 0;
} else {
  // Sinon ajouter +1
  compteur++;
}
// Lance la function pour raffraîchir
displayImage();
});

previousBtn.addEventListener('click', () => {
  // Si le compteur vaut 0 alors il doit passer à 2, sinon compteur vaudra -1 .
  if (compteur == 0) {
    compteur = imagesList.length - 1;
  } else {
    compteur--;
  }
   
  displayImage();
});
 
// Exécute la function
displayImage()