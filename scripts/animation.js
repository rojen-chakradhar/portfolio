gsap.to("#loader", 3, {
	y: -800,
	display: "none",
	ease: Power4.easeInOut,
	delays: 0.2,
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

const tl = gsap.timeline({paused: true, defaults: {ease: "expo.inOut"}});

tl.to(".sidenav", 1.2, {
	autoAlpha: 1,
	clipPath: "circle(150% at 100% 0%)",
	startAt: {clipPath: "circle(0% at 100% 0%)"}
});

tl.from(".side-nav-text", 1, {
	y: 150,
	stagger: 0.1,
	ease: "power4.out"
}, "-=0.6");

function menuOpen() {
	tl.play();
}

function menuClose() {
	tl.reverse();
}

const sideNavLinks = document.querySelectorAll(".side-nav-text");

sideNavLinks.forEach(link => {
	link.addEventListener("click", () => {
		tl.reverse();
	})
})