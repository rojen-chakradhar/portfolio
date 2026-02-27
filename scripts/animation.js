var tl = gsap.timeline();
tl.to("#loader", 3, {
	height: "0",
	display: "none",
	ease: Power4.easeInOut,
	delays: "0.5",
});

tl.from(".navbar", 1, {
	y: -100,
	ease: Power4.easeOut,
})