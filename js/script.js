// Simple confirmation on form submit
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
