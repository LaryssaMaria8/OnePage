function toggleCursos() {
    var cursosElement = document.getElementById("cursos-list");
    var botaoElement = document.getElementById("botao");
  
    if (cursosElement.style.display === "none") {
      cursosElement.style.display = "block";
      botaoElement.textContent = "Mostrar Menos";
    } else {
      cursosElement.style.display = "none";
      botaoElement.textContent = "Mostrar Mais";
    }
  }
  var images = document.querySelectorAll("#slider img");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var currentIndex = 0;

// Exibe a imagem atual
function showImage(index) {
  // Esconde todas as imagens
  images.forEach(function (image) {
    image.classList.remove("active");
  });

  // Exibe a imagem atual
  images[index].classList.add("active");
}

// Evento de clique no botão anterior
prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Evento de clique no botão próximo
nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Exibe a primeira imagem ao carregar a página
showImage(currentIndex);