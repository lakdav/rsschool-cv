const views = {
	links: document.querySelectorAll('.navigation__list-link'),
	currentLink: null,
	header: document.getElementById('header'),
	navigation: document.getElementById('navigation'),
};

window.addEventListener('hashchange', () => {
	const hash = window.location.hash;
	if (views.currentLink) {
		views.currentLink.classList.remove('active');
	}
	views.links.forEach((link) => {
		if (link.hash.endsWith(hash)) {
			link.classList.add('active');
			views.currentLink = link;
		}
	});
});
let options = {
	root: null,
	rootMargin: '250px 0px 0px 0px',
	threshold: 1,
};
let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (!entry.isIntersecting) {
			views.navigation.classList.add('stiky');
		} else {
			views.navigation.classList.remove('stiky');
		}
	});
}, options);
observer.observe(views.header);
