var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector(".jl-gallery-frame-image");
var frameContainer = document.querySelector(".jl-gallery-frame-container");
var galleryImages = document.querySelectorAll(".jl-thumb-img");
var closeGallery = document.querySelectorAll(".jl-toggle-gallery");
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');

const getImageSrc = () => {
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click", function () {
            var imageSrc = this.getAttribute("data-src");
            var itemNum = this.getAttribute("data-item");
            frameImage.setAttribute("src", imageSrc);
            frameImage.setAttribute("data-index", itemNum);
            overlay.classList.add("jl-is-open");
            frameContainer.classList.toggle("jl-is-open");
        });
    }
}
getImageSrc();

for (var c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener("click", function () {
        overlay.classList.remove("jl-is-open");
        frameContainer.classList.remove("jl-is-open");
    });
}

const nextItem = function (currItemNum) {
    // Converta currItemNum para um número inteiro
    currItemNum = parseInt(currItemNum);

    // Defina o número do próximo item
    var nextItemNum = currItemNum + 1;

    // Verifique se o próximo item é válido
    if (nextItemNum < galleryImages.length) {
        // Faça o loop e identifique qual item faz match com o número do próximo item
        for (var n = 0; n < galleryImages.length; n++) {
            var item = galleryImages[n];
            var itemNum = parseInt(item.getAttribute('data-item'));

            if (itemNum === nextItemNum) {
                // Capturamos o data-src e o data-index
                var nextSrc = item.getAttribute('data-src');
                var nextIndex = item.getAttribute('data-item');

                // Passamos o data-src para a tag img no frame
                frameImage.setAttribute('src', nextSrc);
                frameImage.setAttribute('data-index', nextIndex);
            }
        }
    }
}

btnNext.addEventListener('click', function () {
    var currItemNum = frameImage.getAttribute('data-index');
    nextItem(currItemNum);
})

const prevItem = function (currItemNum) {
    // Converte currItemNum para um número inteiro
    currItemNum = parseInt(currItemNum);

    // Define o número do item anterior
    var prevItemNum = currItemNum - 1;

    // Verifique se o item anterior é válido
    if (prevItemNum >= 0) {
        // Faça o loop e identifique qual item faz match com o número do item anterior
        for (var p = 0; p < galleryImages.length; p++) {
            var item = galleryImages[p];
            var itemNum = parseInt(item.getAttribute('data-item'));

            if (itemNum === prevItemNum) {
                // Capturamos o data-src e o data-index
                var prevSrc = item.getAttribute('data-src');
                var prevIndex = item.getAttribute('data-item');

                // Passamos o data-src para a tag img no frame
                frameImage.setAttribute('src', prevSrc);
                frameImage.setAttribute('data-index', prevIndex);
            }
        }
    }
}

btnPrev.addEventListener('click', function () {
    var currItemNum = frameImage.getAttribute('data-index');
    prevItem(currItemNum);
})