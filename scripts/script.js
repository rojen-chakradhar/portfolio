let tab = document.querySelectorAll(".tab");
let projects = document.querySelectorAll(".project-box");
let grid = document.querySelectorAll(".grid");

tab.forEach((elm) => {
	elm.addEventListener("click", () => {
		tab.forEach((btn) => btn.classList.remove("active"));
		elm.classList.add("active");
		let category = elm.textContent.toLowerCase();
		let visibleCount = 0;
		projects.forEach((proj) => {
			if (category === "all") {
				proj.style.display = "block";
				visibleCount++;
			} else {
				if (proj.classList.contains(category)) {
					proj.style.display = "block";
					visibleCount++;
				} else {
					proj.style.display = "none";
				}
			}
		});
		const rows = Math.ceil(visibleCount / 3);
		grid.forEach((g) => {
			g.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
		});
	});
});

let counter = document.getElementById("counter");
let main = document.querySelector("main");
let loader = document.querySelector(".loader");
let count = 0;
let interval = setInterval(() => {
	main.style.display = "none";
	if (count < 100) {
		count++;
		counter.style.opacity = count / 100;
		counter.innerText = count + "%";
	} else {
		clearInterval(interval);
		setTimeout(() => {
			loader.style.display = "none";
			main.style.display = "block";
		}, 700);
	}
}, 40);