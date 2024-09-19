const slides_images = [
  "./assets/img/3N7Z.gif",
  "./assets/img/3yux.gif",
  "./assets/img/69dk.gif",
  "./assets/img/FDIo.gif"
];
const slides_capture = [
  "I'm best of the best",
  "I'm so beautiful",
  "Magnific",
  "Not so fast"
]

//let checked_radio = document.querySelector('input[name = "radio"]:checked');
//console.log(checked_radio);
function changeSlide(element) {
  let id = element.getAttribute("for");
  let image = document.getElementsByTagName('img');
  // image[0].classList.toggle('fade');

  image[0].src = slides_images[id];
  //image[0].classList.toggle('slide');

  let capture = document.getElementsByTagName('p');
  capture[0].textContent = slides_capture[id];
}