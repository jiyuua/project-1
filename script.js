document.addEventListener("DOMContentLoaded", (event) => {
   const timeline = gsap.timeline({ repeat: -1, yoyo: true });
   const changeTimeline = gsap.timeline({ repeat: -1 });
   timeline.to("#sun", {
      // each loop has different size
      scale: () => gsap.utils.random(0.5, 1),
      duration: 1,
   });
   timeline.to(".moon", {
      scale: () => gsap.utils.random(0.8, 1.1),
      duration: 1,
   });

   timeline.to("#mooncake", {
      scale: () => gsap.utils.random(0.8, 1.2),
      duration: 1.5,
   });

   changeTimeline.to(".change", {
      scale: 0.1,
      duration: 4,
      x: 300,
      y: -100,
   });
});

function scrollNext(event) {
   const parentDiv = event.target.parentElement.nextElementSibling;
   // console.log(parentDiv);

   const xPosition = parentDiv.getBoundingClientRect().x + window.scrollX;
   // console.log(xPosition);

   window.scrollTo({
      left: xPosition,
      behavior: "smooth",
   });
}

// scroll previous function
function scrollBack(event) {
   const parentDiv = event.target.parentElement.previousElementSibling;
   const xPosition = parentDiv.getBoundingClientRect().x + window.scrollX;

   window.scrollTo({
      left: xPosition,
      behavior: "smooth",
   });
}

function scroll() {
   const pageContainer = document.querySelectorAll(".page");
   const nextScrollContainer = document.querySelectorAll(".scroll-next");
   const prevScrollContainer = document.querySelectorAll(".scroll-back");
   // scroll next
   nextScrollContainer.forEach((scrolldiv) => {
      scrolldiv.addEventListener("mouseover", (event) => {
         scrollNext(event);
      });

      scrolldiv.addEventListener("click", (event) => {
         scrollNext(event);
      });
   });

   // scroll prev
   prevScrollContainer.forEach((scrollbackdiv) => {
      scrollbackdiv.addEventListener("mouseover", (event) => {
         scrollBack(event);
      });
      scrollbackdiv.addEventListener("click", (event) => {
         scrollBack(event);
      });
   });
}

scroll();

const sunImg = document.querySelectorAll("#sun");
const arrowEffect = document.getElementById("arrow-effect");
console.log(arrowEffect);
sunImg.forEach((sun) => {
   sun.addEventListener("click", () => {
      sun.style.visibility = "hidden";
      arrowEffect.play();
   });
});
