$(document).ready(function(){

	// <================== WORDS ===============
	var wordsArray = ['массив', 'объект', 'синтаксис', 'функция', 'оператор'];
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
		$('.letters').append('<input type="button" value="' + letter +'" class="key">');
	};



	// <================== EVENT ================

	// var btn = $('#btn');
	// var btn = document.getElementById('btn');
	// btn.onClick = function(){
	// 	console.log('CLICKED!!!');
	// };
	var compare = function(val){
		console.log('That is ' + val);
		for (var i = 0; i < wordComp.length; i++) {
			if (val == wordComp[i]){
				$('.secret').remove();
				console.log('true');
				answerArray[i] = val;
				$('.word').append('<p class="secret">' + answerArray.join(' ') + '</p>');
			} else {console.log('false')};
		};
		console.log(answerArray);
	};


	$(function(){
		$('.key').click(function(){
			console.log(this.value);
			compare(this.value);
		});	
	});

});
