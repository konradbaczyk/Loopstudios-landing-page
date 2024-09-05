const btnToggle = document.getElementById("btn-toggle-menu");
const navMenu = document.getElementById("menu");

const handleMenu = (e) => {
	e.preventDefault();
	if (navMenu.classList.contains("navigation__menu--active")) {
		btnToggle.style.backgroundImage = "url(images/icon-hamburger.svg)";
		document.body.classList.remove("no-scroll");
	} else {
		btnToggle.style.backgroundImage = "url(images/icon-close.svg)";
		document.body.classList.add("no-scroll");
	}

	navMenu.classList.toggle("navigation__menu--active");
};

btnToggle.addEventListener("click", handleMenu);
