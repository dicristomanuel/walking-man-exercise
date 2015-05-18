
var man = document.querySelector("img");
var marginLeft = 0
document.body.style.borderBottom = "5px solid lightgreen";
	
	// man.addEventListener("click", function() {
// 	this.style.marginLeft = marginLeft + "px";
// 	marginLeft += 20;
// });


var walkRight = function() {
	setInterval(function(){
		man.style.transform = "rotateZ(0deg)";
		man.style.marginLeft = marginLeft + "px";
		if (marginLeft < 960) {
			marginLeft += 20;
		} else {
			walkLeft();
		}//if statement
	}, 200); //setInterval
}; //walk


var walkLeft = function() {
	setInterval(function(){
		man.style.marginLeft = marginLeft + "px";
		man.style.transform = "rotateZ(180deg)";
		if (marginLeft > 0) {
			marginLeft -= 20;
		} else {
			walkRight();
		}//if statement
	}, 200); //setInterval
}; //walk

walkRight();
