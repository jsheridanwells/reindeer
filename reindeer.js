var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var message = '';

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < colors.length; i++) {
	message += '<strong>'+ colors[i] + '</strong>' + ' ' + reindeer[i] + '<br>';
}

hohohoElement.innerHTML = message;