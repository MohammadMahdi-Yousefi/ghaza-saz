/*********
 footer year
 * ***********/

const yearEl = document.querySelector(".year");
const date = new Date().getFullYear();
yearEl.textContent = date;

/*******
 ham menu function
 * *******/
const BtnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".header");
BtnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});

const Alllinks = document.querySelectorAll(".main-bnav-link");
Alllinks.forEach(function (linkEl) {
  linkEl.addEventListener("click", function () {
    HeaderEl.classList.toggle("nav-open");
  });
});

/**************
 sticky nav
 * ***************/
// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (!ent.isIntersecting) {
//       document.body.classList.add("sticky");
//     } else if (ent.isIntersecting ) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// const sectionheroEl = document.querySelector(".hero-section");
// obs.observe(sectionheroEl);

///////////////////////  sticke nav bar by scroll on
let header = document.querySelector(".header");
document.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 900) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});
