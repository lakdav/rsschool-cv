const views = {
	links: document.querySelectorAll('.navigation__list-link'),
	currentLink: null,
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
