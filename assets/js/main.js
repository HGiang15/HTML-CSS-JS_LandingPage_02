// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

// -----------------------------------------------
// Nav
const links = document.querySelectorAll(".nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.parentElement.classList.remove("active"));
    link.parentElement.classList.add("active");
  });
});

// -----------------------------------------------
/* Features */
const dots = document.querySelectorAll(".feedback .dots .dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});

// -----------------------------------------------
/* Blog */
const dotsOfBlog = document.querySelectorAll(".blog .dots .dot");
dotsOfBlog.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dotsOfBlog.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});
