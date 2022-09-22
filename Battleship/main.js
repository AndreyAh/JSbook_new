var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Приготовиться, пли: введите чистло от 1 до 6:");
if (guess < 0 || guess > 6) {
	alert("Пожалуйста, введите корректный номер ячейки!");
	} else {
		guesses = guesses + 1;
		console.log(guesses);
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал!");
			hits = hits + 1;
				if (hits == 3) {
					isSunk = true;
					alert("Ты утопил мой корабль!!!");
				}
			} else {
						alert("Промазал!");
					}	
		} 
}
var stats = "Ты затратил " + guesses + " выстрелов для потопления моего корабля, " +
	"что означает твоя точность:  " + (3/guesses);
alert(stats);
