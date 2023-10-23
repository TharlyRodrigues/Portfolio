const getImageSrc = () => {
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      var imageSrc = this.getAttribute("data-src");
      var itemNum = this.getAttribute("data-item");

      skeletonLoading.style.display = "flex";

      frameImage.setAttribute("src", imageSrc);
      frameImage.setAttribute("data-index", itemNum);
      overlay.classList.add("jl-is-open");
      frameContainer.classList.toggle("jl-is-open");
      currCounter.innerHTML = counterFormatter(itemNum);

      var myImage = new Image();
      myImage.src = imageSrc;
      myImage.addEventListener("load", function () {});
    });
  }
};
