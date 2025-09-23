 const slider = document.getElementById("slider");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentIndex = 0;
    const slideWidth = 220;

    nextBtn.addEventListener("click", () => {
      if (currentIndex < slider.children.length - 3) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    });


let wrapper = document.querySelector(".slide_wrapper");
let slides = document.querySelectorAll(".img_slide");
let index = 0;

function next() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  wrapper.style.transform = `translateX(-${index * 1075}px)`;
}

setInterval(next, 3000);
