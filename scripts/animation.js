if (history.scrollRestoration) {
	history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

const scroller = new LocomotiveScroll();

const revealSite = () => {
	const loader = document.querySelector("#loader");
	if (!loader) return;
		gsap.to(loader, {
			y: "-100%",
			duration: 1.5,
			ease: "expo.inOut",
			// delay: 0.2,
			onComplete: () => {
				loader.style.display = "none";
				document.fonts.ready.then(() => {
					horTextAnimation();
				});
			},
		});
};

const horTextAnimation = () => {
	const horText = document.querySelector(".name");
	const hero = document.querySelector(".hero");
	if (horText && hero) {
		gsap.set(horText, {x:0, opacity: 1, visibility: "visible"});
		const scrollWidth = horText.scrollWidth;
		const windowWidth = window.innerWidth;
		gsap.to(horText, {
			x: () => -(scrollWidth - windowWidth),
			ease: "none",
			scrollTrigger: {
				trigger: hero,
				pin: true,
				scrub: 1,
				start: "top top",
				end: () => `+=${scrollWidth}`,
				invalidateOnRefresh: true,
				onUpdate: (self) => {
					if(self.progress === 0) gsap.set(horText, {x: 0});
				}
			},
		});
	}
	ScrollTrigger.refresh();
};

const checkGalleryReady = setInterval(() => {
	const drawingTrack = document.getElementById("drawingTrack");
	if(drawingTrack && drawingTrack.children.length > 5) {
		clearInterval(checkGalleryReady);
		revealSite();
	}
}, 100);

setTimeout(() => {
	clearInterval(checkGalleryReady);
	revealSite();
}, 3000);

const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.inOut" } });

tl.to(".sidenav", 1.2, {
	autoAlpha: 1,
	clipPath: "circle(150% at 100% 0%)",
	// startAt: {
	// 	clipPath: "circle(0% at 100% 0%)"
	// }
});

tl.from(".side-nav-text", 1, {
		y: 150,
		stagger: 0.1,
		// ease: "power4.out"
	}, "-=0.6",);

function menuOpen() {tl.play();}
function menuClose() {tl.reverse();}

document.querySelectorAll(".side-nav-text").forEach((link) => {
	link.addEventListener("click", () => {tl.reverse();});
});