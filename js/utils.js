// Typed.js function
$(function() {
		$(".typing").typed({
			strings: ["oh yeah,", " i also write a lot of code"],
			typeSpeed: 75,
			startDelay: 1250,
			backSpeed: 40,
			backDelay: 1700,
			loop: true
		});
	});

// Remove stuff
var divs = document.getElementsByTagName('div');
var div;
var i = divs.length;

while (i--) {
	div = divs[i];
	if (div.style.position == 'fixed') {
		div.parentNode.removeChild(div);
	}
}



