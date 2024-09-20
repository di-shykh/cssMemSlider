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

function changeSlide(element) {
  let id = element.getAttribute("for");
  let image = document.getElementsByTagName('img');
  image[0].classList.remove('slide');
  setTimeout(() => {
    image[0].classList.add('slide');
    image[0].src = slides_images[id];
  }, 100);

  let capture = document.getElementsByTagName('p');
  capture[0].classList.remove('animated');
  setTimeout(() => {
    capture[0].classList.add('animated');
    capture[0].textContent = slides_capture[id];
  }, 100);
}