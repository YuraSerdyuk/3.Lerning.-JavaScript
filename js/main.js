//ПОЧАТОК ПЕРШОГО КОНТЕЙНЕРА
function addition() {
	var num_1_plus = parseInt(document.getElementById('num_1_plus').value);
	var num_2_plus = parseInt(document.getElementById('num_2_plus').value);
	var c = num_1_plus + num_2_plus;
	document.getElementById('result_plus').innerHTML = c;
}

function subtraction() {
	var num_1_minus = parseInt(document.getElementById('num_1_minus').value);
	var num_2_minus = parseInt(document.getElementById('num_2_minus').value);
	var c = num_1_minus - num_2_minus;
	document.getElementById('result_minus').innerHTML = c;
}

function multimplication() {
	var num_1_mn = parseInt(document.getElementById('num_1_mn').value);
	var num_2_mn = parseInt(document.getElementById('num_2_mn').value);
	var c = num_1_mn * num_2_mn;
	document.getElementById('result_mn').innerHTML = c;
}

function division() {
	var num_1_div = parseInt(document.getElementById('num_1_div').value);
	var num_2_div = parseInt(document.getElementById('num_2_div').value);
	var c = num_1_div / num_2_div;
	document.getElementById('result_div').innerHTML = Math.round(c);
}

function validateform() {
	var num_1_all = parseInt(document.getElementById('num_1_all').value);
	var num_2_all = parseInt(document.getElementById('num_2_all').value);
	var element = document.forms["all_form"]["num_0_all"].value;
	var c = num_1_all + num_2_all;
	
	if (element == "+") {
		var c = num_1_all + num_2_all;
		document.getElementById('result_all').innerHTML = c;
	} else if (element == "-") {
		var c = num_1_all - num_2_all;
		document.getElementById('result_all').innerHTML = c;
	} else if (element == "*") {
		var c = num_1_all * num_2_all;
		document.getElementById('result_all').innerHTML = c;
	} else if (element == "/") {
		var c = num_1_all / num_2_all;
		document.getElementById('result_all').innerHTML = Math.round(c);
	} else {
		alert("Я не розумію такої команди");
	}
}

//ЗАКІНЧЕННЯ ПЕРШОГО КОНТЕЙНЕРА







//ПОЧАТОК ДРУГОГО КОНТЕЙНЕРА 


function name_button() {
	var name = document.forms["name"]["text_1_name"].value;
	var last_name = document.forms["last_name"]["text_1_lastName"].value;
	var age = document.forms["age"]["text_1_age"].value;
	var sex = document.forms["sex"]["text_1_sex"].value;
	var mood = document.forms["mood"]["text_1_mood"].value;
	var result = name + last_name + age + sex + mood;

	var text = "Привіт, "+ name.charAt(0).toUpperCase() + name.substr(1) + " " + last_name.charAt(0).toUpperCase() + last_name.substr(1) + ", мене звати JavaScript, мої можливості настільки широкі що я розумію що твоя стать " + sex + ", та тобі " + age + " років. З тобою цікаво спілкуватись коли твій настрій " + mood + ". До скорої зустрічі, не забудь заглянути нижче.";

	if (name == "" || last_name == "" || age == "" || sex == "" || mood == "") {
		alert("Будь ласка заповніть всі вільні поля")
	} else {
		document.getElementById('result_text_aboutMe').innerHTML = text;
	}
}

//КІНЕЦЬ ДРУГОГО КОНТЕЙНЕРА






//ПОЧАТОК ТРЕТЬОГО КОНТЕЙНЕРА

function moreForm() {
	var element = document.forms["more"]["num_1_more"].value;
	var element2 = document.forms["more"]["num_2_more"].value;

	if (element > element2) {
		document.getElementById("result_more").innerHTML = "Так";
	}
	if (element < element2) {
		document.getElementById("result_more").innerHTML = "Ні";
	}
}

function lessForm() {
	var element = document.forms["less"]["num_1_less"].value;
	var element2 = document.forms["less"]["num_2_less"].value;
	var result = element < element2;

	document.getElementById("result_less").innerHTML = result;
}

function equalsForm() {
	var element = document.forms["equals"]["num_1_equals"].value;
	var element2 = document.forms["equals"]["num_2_equals"].value;
	var result = element == element2;

	if (result == true) {
		document.getElementById("result_equals").innerHTML = "Так";
	} else {
		document.getElementById("result_equals").innerHTML = "Ні";
	}
}

function all_comparisonForm() {
	var element0 = document.forms["all_comparison"]["num_0_all_comparison"].value;
	var element = document.forms["all_comparison"]["num_1_all_comparison"].value;
	var element2 = document.forms["all_comparison"]["num_2_all_comparison"].value;
	var result_more = element > element2;
	var result_less = element < element2;
	var result_equals = element == element2;

	if (element0 == ">") {
		document.getElementById("result_all_comparison").innerHTML = result_more;
	} else if (element0 == "<") {
		document.getElementById("result_all_comparison").innerHTML = result_less;
	} else if (element0 == '=') {
		document.getElementById("result_all_comparison").innerHTML = result_equals;
	}
}

function num_lettersForm() {
	var element0 = document.forms["num_letters"]["num_0_num_letters"].value;
	var element = document.forms["num_letters"]["num_1_num_letters"].value;
	var element2 = document.forms["num_letters"]["num_2_num_letters"].value;
	var result_more = element.length > element2.length;
	var result_less = element.length < element2.length;
	var result_equals = element.length == element2.length;

	if (element0 == ">") {
		document.getElementById("result_num_letters").innerHTML = result_more;
	} else if (element0 == "<") {
		document.getElementById("result_num_letters").innerHTML = result_less;
	} else if (element0 == '=') {
		document.getElementById("result_num_letters").innerHTML = result_equals;
	}
}

//КІНЕЦЬ ТРЕТЬОГО КОНТЕЙНЕРА






//ПОЧАТОК ЧЕТВЕРТОГО КОНТЕЙНЕРА

function numbersForm() {
	var element = document.forms["num_numbers"]["num_1_numbers"].value;

	var i = 1;
	var k = '';
	while (i < 100) {
		k += (i / element);
		i++;
    }
    document.getElementById("result_numbers").innerHTML += k + '<br />';
} 


	//var num_plus = (result.split('+').length - 1);
	//var a = parseInt(result.split('+')[0]);
	//var b = parseInt(result.split('+')[1]);
	//var c = a + b;




function calculationForm() {
	var result = document.getElementById('result').innerHTML;
	var	operand = ['+', '-', '*', '/'];

	for ( var i = 0; i < result.length; i++) {
		if (operand.indexOf(result[i]) != -1 ) {

			var num1 = result.substring(0, i);
			console.log(num1);
			var num1_del = result.replace(num1, '');
			var sign1 = num1_del.charAt(0);
			console.log(sign1);
			var sign1_del = num1_del.replace(sign1, '');
			
			var result = sign1_del;
			console.log(result);
			if (operand.indexOf(sign1_del[i]) != -1 ) {
				return calculationForm(sign1_del);
			} else {
				console.log(sign1_del);
			}
			

		} else {}	

	}
	//function test(res0) {
	//	var res1 = "1"
	//	var res0 = res1++;
	//	console.log(res0);
	//	
	//}
	//test(res0);

			//var info = {
			//	a: a,
			//	sign1: sign1,
			//	b: b,
			//};
			//var info2 = JSON.stringify(info);
			//console.log(info2);


			
			//var a2 = result.split(operand[0])[0];
			//console.log(a2);
			//var num1_del = result.replace(a2, '');
			//var sign2 = num1_del.charAt(0);
			//console.log(sign2);
			//var numSign1_del = num1_del.replace(sign2, '');
			//var b2 = numSign1_del.split(operand[0])[0];
			//console.log(b2);
			//var num2_del = numSign1_del.replace(b2, '');
			//var sign3 = num2_del.charAt(0);
			//console.log(sign3);
			//var numSign2_del = num2_del.replace(sign3, '');
			//var c = numSign2_del;
			//console.log(c);



			//var num = "11+2";
			//var aa = num.substring(0,5)[operand[res]];
			//console.log(aa);
}




			function syma(n) {
				if (n == 0) {
					return 1;
				} else {
					return n * n;
				}
			}
			alert(syma(5));
			//Спосіб зі split, не виводить всі знаки підрят, виводить тільки любий 1 знак
			//var str3 = operand.indexOf(result[i]); //причетне до знаку в split

			//var a = result.split(operand[str3])[0]; //вивів в змінну а  все те що стоїть ДО знака
			//console.log(a);
			//var num1_del = result.replace(a, ''); //видалив перший доданок
			//var sign1 = num1_del.charAt(0); //витягнув перший символ "+"
			//console.log(sign1);
			//var numSign1_del = num1_del.replace(sign1, ''); //видалив символ "+"
			//var b = numSign1_del.split(operand[str3])[0]; //вивів в змінну а  все те що стоїть ДО знака
			//console.log(b);
			//var num2_del = numSign1_del.replace(b, ''); //видалив число ПІСЛЯ знаку
			//if (num2_del.charAt(0) == operand[str3]) { //якщо після перших 2-х доданків є знак "+" тоді далі проводити ті маніпуляції з тими числами
				//var sign2 = num2_del.charAt(0);
				//console.log(sign2);
				//var numSign2_del = num2_del.replace(sign2, '');
				//if (numSign2_del.indexOf(operand[str3]) != -1) { //якщо в змінній знаходиться знак тоді далі проводити ті маніпуляції з тими числами
					//var c = numSign2_del.split(operand[str3])[0]; //може бути CВАРКА бо є змінна С
					//console.log(c);
					//var num3_del = numSign2_del.replace(c, '');
					//var sign3 = num3_del.charAt(0);
					//console.log(sign3);
					//var numSign3_del = num3_del.replace(sign3, '');
					//if (numSign3_del.indexOf(operand[str3]) != -1) {
						//var d = numSign3_del.split(operand[str3])[0]; //може бути CВАРКА бо є змінна D
						//console.log(d)
						//var num4_del = numSign3_del.replace(d, '');
						//var sign4 = num4_del.charAt(0);
						//console.log(sign4);
						//var numSign4_del = num4_del.replace(sign4, '');
						//if (numSign4_del.indexOf(operand[str3]) != -1) {
							//var e = numSign4_del.split(operand[str3])[0];
							//console.log(e);
							//var num5_del = numSign4_del.replace(e, '');
							//var sign5 = num5_del.charAt(0);
							//console.log(sign5);
							//var numSign5_del = num5_del.replace(sign5, '');
							//if (numSign5_del.indexOf(operand[str3]) != -1) {
								//var f = numSign5_del.split(operand[str3])[0];
								//console.log(f);
								//var num6_del = numSign5_del.replace(f, '');
								//var sign6 = num6_del.charAt(0);
								//console.log(sign6);
								//var numSign6_del = num6_del.replace(sign6, '');
								//if (numSign6_del.indexOf(operand[str3]) != -1) {
									//var g = numSign6_del.split(operand[str3])[0];
									//console.log(g);
									//var num7_del = numSign6_del.replace(g, '');
									//var sign7 = num7_del.charAt(0);
									//console.log(sign7);
									//var numSign7_del = num7_del.replace(sign7, '');
									//if (numSign7_del.indexOf(operand[str3]) != -1) {
										//var h = numSign7_del.split(operand[str3])[0];
										//console.log(h);
										//var num8_del = numSign7_del.replace(h, '');
										//var sign8 = num8_del.charAt(0);
										//console.log(sign8);
										//var numSign8_del = num8_del.replace(sign8, '');
										//if (numSign8_del.indexOf(operand[str3]) != -1) {
											//var l = numSign8_del.split(operand[str3])[0];
											//console.log(l);
											//var num9_del = numSign8_del.replace(l, '');
											//var sign9 = num9_del.charAt(0);
											//console.log(sign9);
											//var numSign9_del = num9_del.replace(sign9, '');
											//if (numSign9_del.indexOf(operand[str3]) != -1) {
												//console.log("знак є");  ОДНАК ЦЕ ОСТАННЄ ЧИСЛО ТОДІ ПРОДОВЖУВАТИ ЦЕЙ "ЦИКЛ" НЕМАЄ СЕНСУ І ДЕСЯТЕ ЧИСЛО ВСЕРІВНО ПЕРЕЙДЕ ДО ELSE
												//var m = numSign9_del.split(operand[str3])[0];
												//console.log(m);
												//var num10_del = numSign9_del.replace(m, '');
												//var sign10 = num10_del.charAt(0);
												//console.log(sign10);
												//var numSign10_del = num10_del.replace(sign10, '');
											//} else {
											//	var m = numSign9_del;
											//	console.log(m);
											//}

										//} else {
										//	var l = numSign8_del;
										//	console.log(l);
										//}

									//} else {
									//	var h = numSign7_del;
									//	console.log(h);
									//}

								//} else {
								//	var g = numSign6_del;
								//	console.log(g);
								//}

							//} else {
							//	var f = numSign5_del;
							//	console.log(f);
							//}

						//} else {
						//	var e = numSign4_del;
						//	console.log(e);
						//}

					//} else {
					//	var d = numSign3_del; //може бути CВАРКА бо є та сама змінна D
					//	console.log(d);
					//}

				//} else { //при умові якщо в numSign2_del не знаходиться більше знаків
				//	var c = numSign2_del; //може бути CВАРКА бо є та сама змінна С
				//	console.log(c);
				//}

			//} else {
			//	console.log("Кінець, більше чисел немає");
			//} 
			//console.log('Всі введені числа: ' + a + sign1 + b + sign2 + c + sign3 + d + sign4 + e + sign5 + f + sign6 + g + sign7 + h + sign8 + l + sign9 + m);
			//break






			//Спосіб з substring, не працює
			//console.log(result.substring(0, i)); //ЧИСЛО -77- захватив перший доданок
			//var num1 = parseInt(result.substring(0, i)); // обвів її в змінну
	
			
			//var num1_del = result.replace(num1, ''); //видалив першу змінну
			//console.log(num1_del.substring(0, 1)); //ЗНАК + вивів знову першу змінну, в тому випадку це знак
			//var num2 = num1_del.substring(0, 1); // обвів її в змінну

			//var num3_del = num1_del.replace(num2, '');
			//console.log(num3_del.substring(0, i));// ЧИСЛО -88-
			//var num3 = parseInt(num3_del.substring(0, i));

			//var num4_del = num3_del.replace(num3, '');//приклад був: 7+8+7. num3_del є: 8+7 і я видалив з нього число 8
			//console.log(num4_del.substring(0, 1));//ЗНАК -
			//var num4 = num4_del.substring(0, 1);
			
			//var num5_del = num4_del.replace(num4, '');
			//console.log(num5_del.substring(0, i)); //ЧИСЛО -99-
			//var num5 = parseInt(num5_del.substring(0, i));

			//var num6_del = num5_del.replace(num5, '');
			//console.log(num6_del.substring(0, 1)); //ЗНАК *
			//var num6 = num6_del.substring(0, 1);

			//var num7_del = num6_del.replace(num6, '');
			//console.log(num7_del.substring(0, i)); //ЧИСЛО -111-
			//var num7 = parseInt(num7_del.substring(0, i));
			//this
			
			
		

		//}
	//}
//}

function oneForm() {
	var one = "1";
	document.getElementById("result").innerHTML += one;
}

function twoForm() {
	var two = "2";
	document.getElementById("result").innerHTML += two;
}

function threeForm() {
	var three = "3";
	document.getElementById("result").innerHTML += three;
}

function fourForm() {
	var four = "4";
	document.getElementById("result").innerHTML += four;
}

function fiveForm() {
	var five = "5";
	document.getElementById("result").innerHTML += five;
}

function sixForm() {
	var six = "6";
	document.getElementById("result").innerHTML += six;
}

function sevenForm() {
	var seven = "7";
	document.getElementById("result").innerHTML += seven;
}

function eightForm() {
	var eight = "8";
	document.getElementById("result").innerHTML += eight;
}

function nineForm() {
	var nine = "9";
	document.getElementById("result").innerHTML += nine;
}

function zeroForm() {
	var zero = "0";
	document.getElementById("result").innerHTML += zero;
}

function plusForm() {
	var plus = "+";
	document.getElementById("result").innerHTML += plus;
}

function minusForm() {
	var minus = "-";
	document.getElementById("result").innerHTML += minus;
}

function mnForm() {
	var mn = "*";
	document.getElementById("result").innerHTML += mn;
}

function divForm() {
	var div = "/";
	document.getElementById("result").innerHTML += div;
}
