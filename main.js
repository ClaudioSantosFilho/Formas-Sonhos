document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slides img");
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) img.classList.add("active");
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 4000); // Change every 4 seconds
});
