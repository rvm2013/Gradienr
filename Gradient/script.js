var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColor() {
	var x=Math.round(0xffffff * Math.random()).toString(16);
	var y=(6-x.length);
	var z="000000";
	var z1 = z.substring(0,y);
	var color= "#" + z1 + x;
	
	return color;	
   }

 function getRandomColor(){
 	color1.value = setRandomColor();
 	color2.value = setRandomColor();

 	setGradient();

 }  
random.addEventListener("click", getRandomColor);


window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);