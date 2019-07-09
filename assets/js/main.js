const alt_quotes = [
	"He's busy, please don't ask him to make you a website.",
	"He's busy planning a wedding, please don't ask him to make you a website.",
	"He is really busy, don't ask him to make you a website.",
	"He is really busy planning a wedding, don't ask him to make you a website right now.",
	"He is busy, you shouldn't ask him to make you a website.",

	"Need a website? Ask Matt!",
	"Thanks for stopping by!",
	"Have a wonderful day!",
	"See you soon!",

	"Get Meredith a sweet mountain bike!",
	"Our wedding hashtag is #MerAndMattrimony.",
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

		wedding_date = new Date("Aug 10, 2019 4:00:00").getTime();
		interval = setInterval(function() {

		  // Get todays date and time
		  var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = wedding_date - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

		  // Display the result in the element with id="demo"
		  document.getElementById("countdown").innerHTML = days + " days until the wedding!";

		  // If the count down is finished, write some text
		  if (distance < 0) {
			clearInterval(interval);
			document.getElementById("countdown").innerHTML = "";
		  }
		}, 1000);
	});
});
