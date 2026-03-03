var tl = gsap.timeline();
tl.to(".loader1", 3, {
	// height: "0",
	top: "-100dvh",
	display: "none",
	ease: Power4.easeInOut,
	delays: "0.5",
});
tl.from(".navbar", 1, {
	y: -100,
	ease: Power4.easeOut,
})

tl.from(".swiper-wrapper", 1, {
	x: 1300,
	ease: Power4.easeOut,
})

tl.from(".swiper-button-prev", 1, {
	x: -500,
	ease: Power4.easeOut,
})

tl.from(".swiper-button-next", 1, {
	x: 500,
	ease: Power4.easeOut,
})

tl.from(".swiper-pagination", 1, {
	y: 200,
	ease: Power4.easeOut,
})