//Declarando Variáveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");
var toggleMenu = document.querySelectorAll(".jl-toggle-menu");
var menuMobile = document.querySelectorAll(".jl-menu-mob");
var overlay = document.querySelector(".jl-overlay");
var btnManuMobIcon = document.querySelector(".jl-btn-menu-mob ion-icon");

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

// Abrindo e fechando o menu
for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlay = document.querySelector(".jl-menu-overlay");
    var menuMobile = this.parentElement.querySelector(".jl-menu-mob");
    overlay.classList.toggle("jl-is-open");
    menuMobile.classList.toggle("jl-menu-is-closed");
    menuMobile.classList.toggle("jl-menu-is-open");

    var icon = btnManuMobIcon.getAttribute("name");

    if (icon === "menu") {
      btnManuMobIcon.setAttribute("name", "close");
    } else btnManuMobIcon.setAttribute("name", "menu");
  });
}

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

// Animando Elementos o=da topbar
var triggerTopbar = document.querySelector(".jl-trigger-topbar");
var topbar = document.querySelector(".jl-topbar");
var logo = document.querySelector(".jl-logo");

var waypoint = new Waypoint({
  element: triggerTopbar,
  handler: function () {
    topbar.classList.toggle("jl-topbar-bg");
    logo.classList.toggle("jl-logo-shorten");
    logo.classList.toggle("jl-logo-big");
  },
  offset: "50px",
});
