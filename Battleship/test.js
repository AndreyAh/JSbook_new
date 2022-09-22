// function whatShellWear(temp) {
// 	if(temp < 60) {
// 		console.log("wear a jacket");
// 	} else if (temp <= 70){
// 		console.log("wear a sweeater");
// 	} else {
// 		console.log("wear a t-shirt");
// 	}
// }

// whatShellWear(50);
// whatShellWear(80);
// whatShellWear(60);

//-------------------
// function doIt(param) {
// param = 2;
// }
// var test = 1;
// doIt(test);
// console.log(test);

//-------------- Умная машина ------

// function clunk(times) {
// var num = times;
// while (num > 0) {
// display("clunk");
// num = num - 1;
// }
// }
// function thingamajig(size) {
// var facky = 1;
// clunkCounter = 0;
// if (size == 0) {
// display("clank");
// } else if (size == 1) {
// display("thunk");
// } else {
// while (size > 1) {
// facky = facky * size;
// size = size - 1;
// }
// clunk(facky);
// }
// }
// function display(output) {
// console.log(output);
// clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajig(2);
// console.log(clunkCounter);

//--------------- Пузыри!!! Так и не заработал!!!!
/*
var scores = [60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
.33, .31, .25, .29, .27, .22,
.31, .25, .25, .33, .21, .25,
.25, .25, .28, .25, .24, .22,
.20, .25, .30, .25, .24, .25,
.25, .25, .27, .25, .26, .29];


function list(scores) {
	for(var i=0; i<=scores.length - 1; i++) {
		var	value = scores[i];
		console.log("solution" + " #" + i + " score: " + value);
	}
}

function sort(scores) {
	var maxScore = 0;
	var highestNum = [];
		for(var i = 0; i < scores.length; i++ ) {
			if(maxScore <= scores[i]) {
				maxScore = scores[i];
			}
		}
		for(i=0; i < scores.length; i++) {
				if(scores[i] == maxScore) {
					highestNum.push(i);
				// 	if(highestNum.length != 0 )
				// 		{highestNum[i] = i;}
					
				// }
			}
		}
	}

function MostEffective(scores, costs, maxScore) {
		var cost = 100;
		var index; 
		for(var i = 0; i < scores.length; i++ ){
			if(maxScore == scores[i]) {
				if (cost > costs[i]) {
					index = i;
					cost = costs[i]
					}
				}
			}
			
		}

list(scores);
console.log("Bubbles tests: " + scores.length);


var Effective = MostEffective(scores, costs, maxScore);
console.log(maxScore);
console.log("Bubble Solution #" + Effective + " is the most cost effective");

var maxScore = sort(scores);
console.log("Highest bubble score: " + maxScore);
console.log("(first) Solutions with highest score: " + sort(scores));
console.log(scores);
*/

//-------------Первое использование объекта---

var dog = {
name:"Fido",
weight: 20.2,
age: 4,
breed: "mixed",
activity: "fetch balls",
};

var bark;
if (dog.weigth > 20) {
bark = "WOOF WOOF";
} else {
bark = "woof woof";
}
var speak = dog.name + " says " + " WOOF WOOF " + " when he wants to " + dog.activity;
console.log(speak);