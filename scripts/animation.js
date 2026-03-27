var tl = gsap.timeline();
tl.to("#loader", 3, {
	y: -700,
	display: "none",
	ease: Power4.easeInOut,
	delays: "0.2",
});

const triggers = ScrollTrigger.getAll();
triggers.forEach((trigger) => trigger.kill());

const horTextAnimation = () => {
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
				end: () => `+=${horText.offsetWidth - window.innerWidth}`,
			},
		});
		ScrollTrigger.refresh();
	}
};
horTextAnimation();
window.addEventListener("resize", horTextAnimation);