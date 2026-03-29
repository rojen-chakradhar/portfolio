// ==========================
// 🔥 INIT
// ==========================
gsap.registerPlugin(ScrollTrigger);

// reset scroll
window.scrollTo(0, 0);

// ==========================
// 🎬 LOADER (FIXED)
// ==========================
window.addEventListener("load", () => {
  const loader = document.querySelector("#loader");

  gsap.to(loader, {
    y: "-100%",
    duration: 1.2,
    ease: "expo.inOut",
    onComplete: () => {
      loader.style.display = "none";
      initAnimations();
    },
  });
});

// ==========================
// 🚀 MAIN ANIMATIONS
// ==========================
function initAnimations() {
  horizontalScroll();
  gridBackground();
}

// ==========================
// 🧠 HORIZONTAL NAME SCROLL
// ==========================
function horizontalScroll() {
  const horText = document.querySelector(".name");
  const hero = document.querySelector(".hero");

  const scrollWidth = horText.scrollWidth;
  const windowWidth = window.innerWidth;

  gsap.to(horText, {
    x: -(scrollWidth - windowWidth),
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      pin: true,
      scrub: "true",
      start: "top top",
      end: "+=" + scrollWidth,
    },
  });
}

// ==========================
// 📱 SIDENAV (FIXED)
// ==========================
const tl = gsap.timeline({ paused: true });

tl.to(".sidenav", {
  duration: 0.8,
  autoAlpha: 1,
  clipPath: "circle(150% at 100% 0%)",
  ease: "expo.inOut",
});

tl.from(
  ".side-nav-text",
  {
    y: 100,
    stagger: 0.08,
    opacity: 0,
    duration: 0.6,
  },
  "-=0.4"
);

function menuOpen() {
  tl.play();
}

function menuClose() {
  tl.reverse();
}

document.querySelectorAll(".side-nav-text").forEach((link) => {
  link.addEventListener("click", () => tl.reverse());
});

// ==========================
// ✨ GRID BACKGROUND FEATURE
// ==========================
function gridBackground() {
  const hero = document.querySelector(".hero");

  const grid = document.createElement("div");
  grid.classList.add("grid-bg");

  // create boxes
  for (let i = 0; i < 120; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-box");
    grid.appendChild(box);
  }

  hero.appendChild(grid);

  // animate subtle flicker
  gsap.to(".grid-box", {
    opacity: 0.15,
    stagger: {
      each: 0.02,
      from: "random",
      repeat: -1,
      yoyo: true,
    },
    duration: 1.5,
    ease: "power1.inOut",
  });
}