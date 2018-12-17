const alt_quotes = [
	"He's busy, please don't ask him to make you a website.",
	"He is really busy, don't ask him to make you a website.",
	"He's busy, you shouldn't ask him to make you a website.",
	"He's busy, please don't ask him to make you a website.",
	"He is really busy, don't ask him to make you a website.",
	"He's busy, you shouldn't ask him to make you a website.",
	"He's busy, please don't ask him to make you a website.",
	"He is really busy, don't ask him to make you a website.",
	"He's busy, you shouldn't ask him to make you a website.",

	"Need a website? Ask Matt!",
];

$(function () {
	$('a.embed').on('click', function () {
		$(this.parentNode).children('.embed-pane').toggle();
		return false;
	});
	$('.embed-input').on("click", function () {
    	$(this).select();
	});

	$(document).ready(function () {
		let quote_prefix = "This site was created by Matt Ferrante. ";
		if (Math.random() > 0.80) {
			let alt_quote = alt_quotes[Math.floor(Math.random() * alt_quotes.length)];
			$('#bottom-quote').text(quote_prefix + alt_quote);
		}
	});
});
