cy.$("#b")
	.removeBypass()
	.animate({
		bypass: { width: 60, height: 60 },
		duration: 500
	});