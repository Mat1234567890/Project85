canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var greencar_width = 75;
var greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var greencar_x = 0;
var greencar_y = 220;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38'){
		up();
	}

	if (keyPressed == '40') {
		down();
	}

	if (keyPressed == '37'){
		left();
	}

	if (keyPressed == '39'){
		right();
	}


}

function up() {
	if (greencar_y >= 10){
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
		console.log("up arrow pressed, x = " + greencar_x + ", y = " + greencar_y);
	}
}
function down() {
	if (greencar_y <= 290){
		greencar_y = greencar_y + 10;
		uploadBackground();
		uploadgreencar();
		console.log("down arrow pressed, x = " + greencar_x + ", y = " + greencar_y);
	}
}

function left() {
	if (greencar_x >= 6){
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadgreencar();
		console.log("left arrow pressed, x = " + greencar_x + ", y = " + greencar_y);
	}
}

function right() {
	if (greencar_x <= 710){
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadgreencar();
		console.log("right arrow pressed, x = " + greencar_x + ", y = " + greencar_y);
	}
}