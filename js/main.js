//Declarando Variáveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");

//Page Preloader
window.addEventListener("load", function () {
  var pagePreloder = document.querySelector(".jl-preloader");
  pagePreloder.classList.add("jl-fade-out");

  setTimeout(function () {
    pagePreloder.style.display = "none";
  }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});

//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".jl-overlay");
    var modalOrcamento = document.querySelector("#jl-modal-orcamento");

    overlay.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-slide-top-in");
  });
}

var postGallery = document.querySelector(".jl-post-gallery");
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = postGalleryHeight - 270 + "px";

// Animando Elementos on Scroll com Waypoints
var myScrollDown = document.querySelector(".jl-scroll-down");
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("jl-fade-out");
  },
  offset: "80%",
});
