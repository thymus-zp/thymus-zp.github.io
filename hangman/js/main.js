$(document).ready(function(){

	// <================== WORDS ===============
	var wordsArray = ['массив', 'объект', 'синтаксис', 'функция', 'оператор', 'слово', 'воробей', 'лук', 'курва', 'череп', 'носок', 'кот', 'томас', 'черепаха'];
console.log(wordsArray.length);
	var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(word);
	var wordComp = word.split("");
console.log(wordComp);

	var answerArray = [];
	for (let i = 0; i < word.length; i++) {
	 answerArray[i] = "_";
	};
console.log(answerArray.join(' '));

	$('.word').append('<p class="secret">' + answerArray.join(' ') + '</p>');



	// <================ KEYS  ==================

	var arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
	for (let i = 0; i < arr_ru.length; i++) {
		let letter = arr_ru[i];
		$('.letters').append('<input type="button" value="' + letter +'" class="key able">');
	};



	// <=================== ENDING ==============
	var lose = function(){
		console.log('You lose!');
		alert('You lose!');
	};

	var victory = function(){
		console.log('You win!');
		alert('You won!');
	}



	// <================== EVENT ================
	var compare = function(val){
		console.log('That is ' + val);
		for (var i = 0; i < wordComp.length; i++) {
			if (val == wordComp[i]){
				$('.secret').remove();
				console.log('true');
				answerArray[i] = val;
				$('.word').append('<p class="secret">' + answerArray.join(' ') + '</p>');
			}// else {console.log('false')};
		};
		console.log(answerArray);
	};


	var drw = 8;
	var res = 0;
	var lastRes = 0;
	var result = function(){
		let wrong = true;
		let check = 0;
		for (var i = 0; i < wordComp.length; i++) {
		 	if (wordComp[i] == answerArray[i]){
		 		res++;
		 	};
		};
		{check = res - lastRes};
		if (check > 0){
			wrong = false;
		};
		if (check == 0){
			wrong = true;
		};
		{lastRes = res};
		{res = 0};
		if (wrong) {
			drw--;
		};
		if (lastRes == wordComp.length) {
			victory();
		};
		if (drw == 0){
			lose();
		};
		console.log(drw + ' ' + wrong);
		animate(drw);
	};



	// <===================== ANIMATION ================
	var c = document.getElementById("ccc");
	console.log(c);
	var ctx = c.getContext("2d");
	var x1 = (c.width / 10);
	var y1 = (c.height / 15);
	console.log(x1);
	console.log(y1);

	ctx.beginPath();
	ctx.strokeStyle = '#fff';
	ctx.lineWidth = 5;
	ctx.lineCap = 'round';

	ctx.moveTo(x1, y1 * 14);
	ctx.lineTo(x1 * 7, y1 * 14);
	ctx.moveTo(x1 * 3, y1 * 14);
	ctx.lineTo(x1 * 3, y1 * 2);
	ctx.lineTo(x1 * 7, y1 * 2);

	ctx.stroke();
	ctx.closePath();


	var animate = function(draw){
		let bodyWidth = 100;
		switch(draw){
			// ========= ROPE ==========
			case 7:
				ctx.beginPath();
				ctx.moveTo(x1 * 7, y1 * 2);
				ctx.lineTo(x1 * 7, y1 * 4);
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= HEAD ==========			
			case 6:
				ctx.beginPath();
				ctx.arc(x1 * 7, y1 * 5, x1, 0, Math.PI * 2);
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= NECK ==========	
			case 5:
				ctx.beginPath();
				ctx.moveTo(x1 * 7, y1 * 6);
				ctx.lineTo(x1 * 7, (y1 * 6) + (y1 / 2));
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= BODY ==========	
			case 4:
				ctx.beginPath();
				ctx.lineWidth = bodyWidth;
				ctx.moveTo(x1 * 7, (y1 * 6) + (y1 / 2));
				ctx.lineTo(x1 * 7, y1 * 9);
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= L-HAND ==========	
			case 3:
				ctx.beginPath();
				ctx.lineWidth = 5;
				ctx.moveTo((x1 * 7) - (bodyWidth / 2), (y1 * 6) + (y1 / 2));
				ctx.lineTo((x1 * 7) - bodyWidth, y1 * 9);
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= R-HAND ==========	
			case 2:
				ctx.beginPath();
				ctx.moveTo((x1 * 7) + (bodyWidth / 2), (y1 * 6) + (y1 / 2));
				ctx.lineTo((x1 * 7) + bodyWidth, y1 * 9);
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= L-LEG ==========	
			case 1:
				ctx.beginPath();
				ctx.moveTo((x1 * 7) - (bodyWidth / 2), y1 * 9);
				ctx.lineTo((x1 * 7) - (bodyWidth / 1.5), y1 * 11);
				ctx.stroke();
				ctx.closePath();
			break;
			// ========= R-LEG ==========	
			case 0:
				ctx.beginPath();
				ctx.moveTo((x1 * 7) + (bodyWidth / 2), y1 * 9);
				ctx.lineTo((x1 * 7) + (bodyWidth / 1.5), y1 * 11);
				ctx.stroke();
				ctx.closePath();
			break;

		};
	};
	



	// <=================== ON CLIC =================
	$(function(){
		$('.key').click(function(){
			$(this).attr('disabled','true');
			$(this).addClass('clicked');
			$(this).removeClass('able');
			console.log(this.value);
			compare(this.value);
			result();
		});	
	});


});
