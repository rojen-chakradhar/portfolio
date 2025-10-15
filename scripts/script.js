let tab = document.querySelectorAll(".tab");
let projects = document.querySelectorAll(".project");

tab.forEach((elm) => {
	elm.addEventListener("click", () => {
		tab.forEach((btn) => btn.classList.remove("active"));
		elm.classList.add("active");
		let category = elm.textContent.toLowerCase();
		projects.forEach((proj) => {
			if (category === "all") {
				proj.style.display = "block";
			} else {
				if (proj.classList.contains(category)) {
					proj.style.display = "block";
				} else {
					proj.style.display = "none";
				}
			}
		});
	});
});
