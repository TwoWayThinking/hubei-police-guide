  function showImage(src) {
    document.getElementById("preview-img").src = src;
    document.getElementById("preview").style.display = "flex";
  }
  function hideImage() {
    document.getElementById("preview").style.display = "none";
  }
