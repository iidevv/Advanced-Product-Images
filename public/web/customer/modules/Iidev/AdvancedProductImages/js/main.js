document.addEventListener("DOMContentLoaded", () => {
  // fancybox
  function setFancyboxTrigger() {
    document
      .querySelector(".product-photo-box img")
      .setAttribute("data-fancybox-trigger", "gallery");
  }
  // magnifier
  function initZoom() {
    const img = document.querySelector(".product-photo-box img");
    const preview = document.querySelector(".zoom-preview");
    
    let backgroundSrc;
    let zoomLevel = 2.3;


    img.addEventListener("mouseover", (e) => {
      backgroundSrc =
        document.querySelector(".cycle-slideshow .selected a").href ||
        e.target.src;

      preview.style.display = "block";
      preview.style.backgroundImage = `url(${backgroundSrc})`;
      preview.style.backgroundSize = `${img.width * zoomLevel}px ${
        img.height * zoomLevel
      }px`;
    });

    img.addEventListener("mousemove", (e) => {
      // Calculate the mouse position relative to the image
      const rect = e.target.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;

      // Adjust the background position calculation
      const bgPosX = (posX / img.width) * 100;
      const bgPosY = (posY / img.height) * 100;

      preview.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    });

    img.addEventListener("mouseout", () => {
      preview.style.backgroundImage = "none";
      preview.style.display = "none";
    });

    img.addEventListener("wheel", (e) => {
      e.preventDefault();

      zoomLevel += e.deltaY * -0.01;

      zoomLevel = Math.min(Math.max(1.75, zoomLevel), 4);
      preview.style.backgroundSize = `${img.width * zoomLevel}px ${
        img.height * zoomLevel
      }px`;
    });
  }

  Fancybox.bind('[data-fancybox="gallery"]', {});

  xcart.bind("initialize-product-gallery", function () {
    setFancyboxTrigger();
    initZoom();
  });

  document
    .querySelector(".product-image-gallery")
    ?.addEventListener("mouseenter", () => {
      setFancyboxTrigger();
      initZoom();
    });
});
