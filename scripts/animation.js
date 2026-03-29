const scroller = new LocomotiveScroll({
	el: document.querySelector("main"),
	smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);

const revealSite = () => {
	gsap.to("#loader", {
		y: "-100%",
		duration: 1.5,
		ease: "expo.inOut",
		delays: 0.2,
		onComplete: () => {
			document.querySelector("#loader").style.display = "none";
			horTextAnimation();
		},
	});
};

const horTextAnimation = () => {
	const horText = document.querySelector(".name");
	if (horText) {
		gsap.to(horText, {
			x: () => -(horText.offsetWidth - window.innerWidth),
			ease: "none",
			scrollTrigger: {
				trigger: ".hero",
				pin: true,
				scrub: 1,
				anticipatePin: 1,
				invalidateOnRefresh: true,
				refreshPriority: 1,
				start: "top top",
				end: () => `+=${horText.offsetWidth}`,
			},
		});
		ScrollTrigger.refresh();
	}
};

const forceReveal = setTimeout(revealSite, 3000);

window.addEventListener("load", () => {
	clearTimeout(forceReveal);
	revealSite();
});

const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.inOut" } });

tl.to(".sidenav", 1.2, {
	autoAlpha: 1,
	clipPath: "circle(150% at 100% 0%)",
	startAt: { clipPath: "circle(0% at 100% 0%)" },
});

tl.from(
	".side-nav-text",
	1,
	{
		y: 150,
		stagger: 0.1,
		ease: "power4.out",
	},
	"-=0.6",
);

function menuOpen() {
	tl.play();
}

function menuClose() {
	tl.reverse();
}

document.querySelectorAll(".side-nav-text").forEach((link) => {
	link.addEventListener("click", () => {
		tl.reverse();
	});
});