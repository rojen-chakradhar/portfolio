var tl = gsap.timeline();
tl.to(".loader", 3, {
	top: "-100dvh",
	display: "none",
	ease: Power4.easeInOut,
	delays: "0.5",
});

tl.from(".logo", 1, {
	y: -100,
	ease: Power4.easeOut,
})

tl.from(".nav-links", 1, {
	y: -100,
	ease: Power4.easeOut,
})

tl.from(".loc", 1, {
	x: -500,
	ease: Power4.easeOut,
})

tl.from(".me", 1, {
	x: 500,
	ease: Power4.easeOut,
})

tl.from(".name", 1, {
	marginLeft: 1400,
	ease: Power4.easeOut,
})

const horTextAnimation = () => {
  const triggers = ScrollTrigger.getAll();
  triggers.forEach((trigger) => trigger.kill());
  const horText = document.querySelector(".name");
  if (horText) {
    gsap.to(horText, {
      x: () => -(horText.offsetWidth - window.innerWidth),
      ease: "linear",
      scrollTrigger: {
        trigger: ".hero",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        end: () => `+=${horText.offsetWidth - window.innerWidth}`
      }
    });
    ScrollTrigger.refresh();
  }
};
horTextAnimation();
window.addEventListener("resize", horTextAnimation);
