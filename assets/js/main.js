const alt_quotes = [
	"He's busy, please don't ask him to make you a website.",
	"He's busy planning a wedding, please don't asks him to make you a website.",
	"He is really busy, don't ask him to make you a website.",
	"He is really busy planning a wedding, don't ask him to make you a website right now.",
	"He is busy, you shouldn't ask him to make you a website.",

	"Need a website? Ask Matt!",
	"Thanks for stopping by!",
	"Have a wonderful day!",

	"Get Meredith a sweet mountain bike!",
	"Our wedding hashtag is #MeredithAndMattrimony.",
	"Let the photographer take the pictures."
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
		if (Math.random() > 0.75) {
			let alt_quote = alt_quotes[Math.floor(Math.random() * alt_quotes.length)];
			$('#bottom-quote').text(quote_prefix + alt_quote);
		}
	});
});
